import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeDescription, search, add, clear } from '../actions/todoActions'

class TodoForm extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.search()
    }

    onClick(description) {
        this.props.add(description)
        this.props.search()
    }

    onClear() {
        this.props.clear()
        this.props.search()
    }


    render() {
        const description = this.props.description
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id="description" 
                        className="form-control"
                        placeholder="Adicione uma tarefa" 
                        onChange={this.props.changeDescription}
                        value={this.props.description} required/>
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={() => this.onClick(description)}></IconButton>
                    <IconButton style="info" icon="search" onClick={()  => this.props.search(description)}></IconButton>
                    <IconButton style="default" icon="close" onClick={() => this.onClear()}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({add, changeDescription, search, clear},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)