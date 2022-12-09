//import { button } from 'bootstrap'
import React from 'react'
import Down from './client-logo-2.png'
//import File from './[iSongs.info] 06 - Bimbi Bimbisara.mp3'
import Video from './Vegetables - 4572.mp4'

const Images = () => {
    return (
        <div>
            <center>

                <img src={Down} height="250px" width="auto" alt='no' /><br />
                <video height='350px' width="350px" controls>


                    <source src={Video} type="video/mp4" />
                   

                    
                </video><br/>
                <a href={Video} className="btn btn-primary" download='video' style={{color:'black', background:'black',padding: '10px 2px 5px',borderRadius: '5rem'}}
>click to here download</a>
                
               

            </center>


        </div>
    )
}

export default Images