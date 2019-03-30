import React, { Component } from 'react';
import CategoryCheckbox from './CategoryCheckbox';
import OrderByCombobox from './OrderByCombobox';

class Painel extends Component{
    
    render(){
        
        return(            
            <div style={{display: 'flex'}} >
                <CategoryCheckbox />
                <OrderByCombobox />
            </div>                                            
        );
    }
}

export default Painel;