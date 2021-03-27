import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './index.css'
const ClipView = () => (
    <section className='video-cell'>
    <img src='https://picsum.photos/400/200' style={{borderRadius:'30px'}} />
    </section>
)

class pannel extends Component {
    render() {
        return (
        
            <StickyContainer>
            <div className='video-container'>{
                [1,3,4,5,6].map((e) => <ClipView/>)
            }
            </div>
            </StickyContainer>
        );
    }
}

export default pannel;