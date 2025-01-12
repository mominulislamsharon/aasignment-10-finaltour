import { Link } from "react-router-dom";



const HomeCard = ({item1}) => {
 const {_id, name, email, price, rating, time, item, category, customization, stock, photo,  message} = item1 || {};
  return (
      <div className="card w-[400px] h-[500px] shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p>{message}</p>
          <p>Items: </p>
          <p className="text-lg">Ratting: {rating}</p>
          <div className="card-actions justify-end">
            <Link to="/allArtCraft">
            <button className="btn w-full btn-primary">View All</button></Link>
          </div>
        </div>
      </div>
  );
};

export default HomeCard;
