// 静态数据
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import List from '../components/List'

export default class Foo extends Component {
    render() {
        const { lists } = this.props

        console.log(lists)

        return(
            <div>
                <ul className="list-group">
                    { lists.map((e, index) => 
                        <List text={e.text} key={index}></List>
                    )}
                </ul>
            </div>
        )
    }
}

Foo.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}

const getList = state => {
    return {
        lists: state.update.lists
    }
}

export default connect(getList)(Foo)