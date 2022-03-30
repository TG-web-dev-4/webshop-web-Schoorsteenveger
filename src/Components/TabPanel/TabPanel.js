import React from 'react';
import { useStyles } from './styles.js';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';



function TabPanel(props) {
  const classes = useStyles(props)

  const products = useSelector((state) => state.shop.products)

  const params = useParams();
  // const dispatch = useDispatch();

  const productID = parseInt(params.id)

  const contentDetail = products.filter(product => product.id === productID)

  return (
    <div className={classes.containerTabs}>

      <div className='headerTabs'>
        <button className={classes.tabs} onClick={("")}>
          Description
        </button>

        <button className={classes.tabs} onClick={("")}>
          Gallery
        </button>
        <button className={classes.tabs} onClick={("")}>
          Nearby
        </button>
      </div>

      <div className="contant-tabs">
        <div className='toggle-state'>
          <h2>Full Property Description</h2>
          <p>
            {contentDetail[0].description}
          </p>
        </div>
      </div>

      <div className="contant-tabs">
        <div className='toggle-state'>
          <h2>Gallery</h2>
          <p>
            Gallerylist
          </p>
        </div>
      </div>

      <div className="contant-tabs">
        <div className='toggle-state'>
          <h2>Nearby</h2>
          <p>
            Nearby schools etc..
          </p>
        </div>
      </div>

    </div>
  )
}

export default TabPanel