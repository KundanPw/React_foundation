import './Dog-tile.css';
import DogDescription from './DogDescription';
function DogTile(props) {
    const text = "Cute puppy";
    const customStyle = {fontSize: '20px', color: 'red'}
    // const imgUrl = "https://thumbs.dreamstime.com/b/happy-little-havanese-puppy-sitting-grass-orange-dog-45886384.jpg"
    return (
      <div className="first">
        <img src={props.image}/>
        <h3 style={customStyle}>{props.text}</h3>
        <DogDescription description={props.description}/>
      </div>
    ) 
  }

export default DogTile;