import React from 'react';

import copyright from '../copyright';

//函数返回的是一个包含了传入组件的新组件定义
export default (FootContentComponent) => {
    return class extends React.Component{
        constructor(props) {
            super(props);
        }

        render(){
            if(!FootContentComponent){
                FootContentComponent = copyright;
            }

            return (
                <div>
                    <div className='footbar'>
                        <FootContentComponent  {...this.props} />
                    </div>

                    <style jsx>{`
                        .footbar{
                            width:96%;
                            position: fixed;
                            bottom: 0px;
                            display: flex;
                            justify-content: flex-end;
                        }
                    `}</style>
                </div>
            );
        }
    }
}