import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class CategoryCheckbox extends Component {

    render() {                
        const {objAllCategories} = this.props      
        return (
            <div>
                {objAllCategories.allCategories.map((category) =>       
                    <Button 
                        key={category.name}
                        as={Link} 
                        to={`/${category.name}`}>
                        {category.name}
                    </Button>
                )}  
            </div>    
        );
    }
}

const mapStateToProps = (state, props) => ({
    objAllCategories: state.storeCategories,        
});

export default connect(mapStateToProps,null)(CategoryCheckbox);