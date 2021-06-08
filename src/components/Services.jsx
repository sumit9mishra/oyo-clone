import React, { Component } from 'react';
import Title from './Title'; 
import { FaShuttleVan, FaSwimmingPool} from 'react-icons/fa'
import { AiOutlineWifi } from 'react-icons/ai';
import { MdFreeBreakfast } from 'react-icons/md'

export default class Services extends Component {
    state = {
        services:[
            {
                icon:<AiOutlineWifi/>,
                title:"Free Wifi",
                info:"Speed of 5MBPS and Unlimited browsing"
        },
             {
                icon: <FaShuttleVan />,
                title: "Free travel",
                info: "Travel upto 100 Km at any time during your visit"
            },
            {
                icon: <FaSwimmingPool />,
                title: "Swimming Pool",
                info: "If you dont know how to swim dont worry we have instructors"
            },
            {
                icon: <MdFreeBreakfast />,
                title: "Your first Meal",
                info: "Free breakfast"
            }

    ]
    }
    render() {
        return (
            <section className="services">
                <Title title ="services"/>
                <div className="services__center">
                    {this.state.services.map((item,index)=>{
                        return <article key ={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            
                            </article>
                    })}
                </div>


            </section>
        )
    }
}
