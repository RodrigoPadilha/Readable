import React, { Component } from "react";
import Combobox from 'react-widgets/lib/Combobox'
import { connect } from 'react-redux'
import { orderPosts } from '../actions/PostAction'

class OrderByCombobox extends Component {

    render() {

        return (
            <div className="col-md-4" style={{padding: '0'}} >
                Ordenar por:
                <Combobox
                    data={['-voteScore', '-timestamp']}
                    defaultValue={'-voteScore'}
                    disabled={[]}
                    onChange={value => this.props.orderBy(value)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    objAllPosts: state.allPosts,    
});

const mapDispatchToProps = (dispatch) => ({ 
    orderBy: (value) => dispatch(orderPosts(value)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(OrderByCombobox);
