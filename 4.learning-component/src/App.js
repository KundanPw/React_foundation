import './App.css'
import DogTile from './Dog-tile'
function App() {
  return (
    <section className='puppy'>
      <DogTile description = "d1" text = "puppy1" image = "https://thumbs.dreamstime.com/b/happy-little-havanese-puppy-sitting-grass-orange-dog-45886384.jpg"/>
      <DogTile description = "d2" text = "puppy2" image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2jUEErSM6IlM-aET83TOZy4C2uMlAUWXyCn4W1IJxeYQ31RgmR_9iB0jhl0TEeJjUTA&usqp=CAU"/>
      <DogTile description = "d3" text = "puppy3" image = "https://i.guim.co.uk/img/media/fccf2d648bd42dae41b65cad55925181506ec5e7/0_117_6016_3611/master/6016.jpg?width=465&dpr=1&s=none"/>
      <DogTile description = "d4" text = "puppy4" image = "https://www.shutterstock.com/image-photo/happy-puppy-dog-running-on-260nw-1555613531.jpg"/>
    </section>
  );
}

export default App;


