import { Component, ChangeEvent } from "react";
import { robotsArray } from '../components/robots';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

interface IAppStateProps {
    robots: typeof robotsArray;
    searchfield: string
}

class App extends Component <{title: string}, IAppStateProps> {
    constructor(props: {title: string}) {
        super(props)
        this.state = {
        robots: [],
        searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users} ));
    }

    onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const { robots, searchfield } = this.state;
        const fileteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox title='search box' searchChange={this.onSearchChange}/>
                <ErrorBoundary title='error catcher'>
                    <Scroll title='scrolling'>
                    <CardList title='list of robot cards' robots={fileteredRobots} />
                    </Scroll>
                </ErrorBoundary>
            </div>
        );
    }

}

export default App
