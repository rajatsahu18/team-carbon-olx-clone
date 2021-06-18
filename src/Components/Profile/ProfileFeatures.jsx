import React from 'react'
import {Link} from "react-router-dom"
import {BiSpreadsheet, BiHelpCircle} from "react-icons/bi"
import {RiLogoutBoxLine, RiListSettingsLine,RiDownloadLine } from "react-icons/ri"
import {IoIosBusiness} from "react-icons/io"
import {TiBusinessCard} from "react-icons/ti"
import avatar from "../../Assets/avatar.png"
import {ProfileFeaturesWrapper} from "../styles"
import {ProfileItem} from "../styles"
import { useSelector } from 'react-redux'

export const ProfileFeatures = () => {   
    const firstName = useSelector(state => state.userAuthentication.firstName)
    const userDisplayPic= useSelector(state => state.userAuthentication.userDisplayPic)
    return (
        <>
        <ProfileFeaturesWrapper>
            <div>
                <img 
                style = {{height : "70px", width : "70px", borderRadius : "50%"}}
                src= {userDisplayPic === ""? avatar : userDisplayPic} alt="avatar" />
                <div>
                    <div>Hello,</div>
                    <div>{firstName === ""?"User" : firstName}</div>
                    <div color = "#002F34;">
                        <Link>View and edit profile</Link>
                    </div>
            
                </div>
            </div>
        </ProfileFeaturesWrapper>

        <ProfileItem>
            <div> <BiSpreadsheet size = "30px" color = "#002F34" />
            </div> <div><Link to = "/myAds">My Ads</Link></div>
        </ProfileItem>
        <ProfileItem>
            <div> <IoIosBusiness size = "30px" color = "#002F34" /> </div>
            <div><Link>Buy Business Packages</Link> </div>
        </ProfileItem>
        <ProfileItem>
            <div> <TiBusinessCard size = "30px" color = "#002F34" /> </div>
            <div><Link>Bought Packages & Billing</Link></div>
        </ProfileItem>
        <ProfileItem>
            <div><BiHelpCircle size = "30px" color = "#002F34" /> </div>
            <div><Link>Help</Link></div>
        </ProfileItem>
        <ProfileItem>
            <div><RiListSettingsLine size = "30px" color = "#002F34"/></div>
            <div><Link> Settings</Link></div>
        </ProfileItem>
        <ProfileItem>
            <div><RiDownloadLine size = "30px" color = "#002F34" /> </div>
            <div><Link>Install OLX Lite app</Link></div>
        </ProfileItem>
        <ProfileItem>
            <div><RiLogoutBoxLine size = "30px" color = "#002F34" /> </div>
            <div><Link> Logout</Link></div>
        </ProfileItem>
        </>
    )
}
