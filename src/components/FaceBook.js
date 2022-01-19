import React from 'react'
import profiles from '../data/berlin.json'


export default function FaceBook() {



    return (
        <div>
            

            {profiles.map((profile, index) => {
                return (
                    <div key={index} className='IdCard'>

                        <img src={profile.img} />
                        <p className='IdCardB'> <strong>First Name: {profile.firstName}</strong>
                            <strong>Last Name: {profile.lastName}</strong>
                            <strong>Country: {profile.country}</strong>
                            <strong>Type: {profile.isStudent === false ? 'Teacher' : 'Student'}</strong></p>


                    </div>
                )
            })}

        </div>
    )
}
