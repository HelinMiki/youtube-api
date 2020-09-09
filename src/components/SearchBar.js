import React from 'react';

class SearchBar extends React.Component {
    state = { search: '' }

    //Input callback
    onInputChange = (event) => {
        this.setState({ search: event.target.value });
    };

    //Submit callback
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.search);
    };

    render() {
        return(
            <div className="search-bar ui segment" maxLength="2">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>YouTube videohaku</label>
                        <input 
                            type="text" 
                            value={this.state.search}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;