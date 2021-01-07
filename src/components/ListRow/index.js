import React, { useState } from 'react';
import './styles.css';

export default function ListRow({ title, list }){

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
        let widthListShows = list.length * 150;
        if ((window.innerWidth - widthListShows) > valueScrollRight) {
            valueScrollRight = (window.innerWidth - widthListShows) - 60;
        }
        setScrollX(valueScrollRight);
    }


    return(
        <div className='showsRow'>
            <h2 className='title'>{title}</h2>

            {
                list.length > 10 || window.innerWidth < 730 ? 

                <>
                    <div className="arrow-navigation-left" onClick={handleLeftArrow}>
                        <i className="fas fa-chevron-left"></i>
                    </div>

                    <div className="arrow-navigation-right" onClick={handleRightArrow}>
                        <i className="fas fa-chevron-right"></i>
                    </div>

                </>
                :
                <>
                </>
            }
                <div className="showsRow-content">
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