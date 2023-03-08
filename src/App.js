// Import data
import {postings} from './postings';

// Import components
import './App.css';
import SearchBar from './Searchbar';
import Directory from './Directory';
import Gallery from './Gallery';
import Sidebar from './Sidebar';

function App() {
	return (
		<div>
			<h1>Nandoslist</h1>
			<div className="App">
				<SearchBar />
				<Directory />
				<Sidebar />
				<Gallery postings={postings} />
			</div>
		</div>
	);
}

export default App;
