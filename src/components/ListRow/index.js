import React, { useState } from 'react';
import './styles.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, list })=>{

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () =>{
        let valueScrollLeft = scrollX + Math.round(window.innerWidth / 2); 
        if (valueScrollLeft > 0) {
            valueScrollLeft = 0;
        }

        setScrollX(valueScrollLeft);
    }

    const handleRightArrow = () =>{

        let valueScrollRight = scrollX - Math.round(window.innerWidth / 2); 
        let ListWidth = list.length * 150;
        if ((window.innerWidth - ListWidth) > valueScrollRight) {
            valueScrollRight = (window.innerWidth - ListWidth) - 60;
        }
        setScrollX(valueScrollRight);
    }


    return(
        <div className='showsRow'>
            <h2 className='title'>{title}</h2>

            {
                list.length > 10 || window.innerWidth < 730 ? 

                <>
                    <div className="showsRow-navigation-left" onClick={handleLeftArrow}>
                        <NavigateBeforeIcon style={{fontSize: 50, color:'#fff'}} />
                    </div>

                    <div className="showsRow-navigation-right" onClick={handleRightArrow}>
                        <NavigateNextIcon style={{fontSize: 50, color:'#fff'}} />
                    </div>

                </>
                :
                <>
                </>
            }
                <div className="showsRow-listarea">
                    <div className="showsRow-list" style={{
                        marginLeft: scrollX,
                        width: list.length * 150
                        }}>
                        {list.length > 0 && list.map((show, id)=>{
                        let image = show.image.medium;
                        let showName = show.name
                        return (
                            <div key={id} className='showsRow-item'>
                                <img src={image} alt={showName}/>
                            </div>
                        )
                            })}
                    </div>
                </div>

        </div>
    )
}