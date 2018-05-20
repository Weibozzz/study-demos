import React,{PropTypes} from 'react';

class Footer extends React.Component{

    renderFilter(filter, name) {

        if(this.props.filter===filter){
            return name
        }
        return (
            <a href='#' onClick={e => {
                e.preventDefault();
                this.props.onSetVisible(filter)
            }}>
                {name}
            </a>
        )
    }

    render () {
        return (
            <div className='filter'>
                <p>
                    展示 :
                    {' '}
                    {this.renderFilter('SHOW_ALL', '全部')}
                    {' | '}
                    {this.renderFilter('SHOW_COMPLETED', '已完成')}
                    {' | '}
                    {this.renderFilter('SHOW_ACTIVE', '未完成')}
                </p>
            </div>
        )
    }
}
export default Footer