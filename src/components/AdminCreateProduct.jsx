import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Input from '../components/Input';
import LoginButton from '../components/LoginButton';
import backblack from '../assets/img/backblack.png';
import { useDispatch } from 'react-redux';
import { fetchCreateProduct, setLoading } from '../store/reducers/products';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productsApi } from '../api/api';

const AdminCreateProduct = ({ rerender, setRerender, mobile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.products);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  //Sizes input value
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [depth, setDepth] = useState('');
  //Colors
  const [colors, setColors] = useState('');
  //Material
  const [material, setMaterial] = useState('');
  //photos
  const [photos, setPhotos] = useState([]);

  const [disabled, setDisabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const widthHandler = (e) => {
    setWidth(e.target.value);
  };
  const heightHandler = (e) => {
    setHeight(e.target.value);
  };
  const depthHandler = (e) => {
    setDepth(e.target.value);
  };
  const colorsHandler = (e) => {
    setColors(e.target.value);
  };
  const materialHandler = (e) => {
    setMaterial(e.target.value);
  };
  const chekedHandler = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    if (
      name != '' &&
      description != '' &&
      price != '' &&
      width != '' &&
      height != '' &&
      depth != '' &&
      colors != '' &&
      material != ''
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, description, price, width, height, depth, colors, material, photos]);

  const uploadData = async () => {
    dispatch(setLoading(true));
    const response = await productsApi.createProduct(photos);
    const data = {
      name: name,
      description: description,
      price: Number(price.replace(' ', '')),
      size: [width, height, depth],
      colors: colors,
      material: material,
      type: selectedOption,
      date: new Date().toISOString().split('T')[0],
      views: 0,
      photos: response,
    };
    console.log(data);
    dispatch(fetchCreateProduct(data));
    dispatch(setLoading(false));
    alert('?????????? ????????????!');
    cleanAllInputs();
  };

  const cleanAllInputs = () => {
    setName('');
    setDescription('');
    setPrice('');
    setWidth('');
    setHeight('');
    setDepth('');
    setColors('');
    setMaterial('');
    setSelectedOption('');
    setRerender(!rerender);
  };

  const onSubmit = () => {
    uploadData();
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={mobile ? 'admin__create-mobile' : 'admin__create'}>
        {mobile && (
          <img src={backblack} className='admin__goBack' alt='?????????????????? ??????????' onClick={goBack} />
        )}
        <div className='create'>
          <h5>???????????????? ??????????</h5>
          <div className='create__inputs'>
            <Input
              name='name'
              type='text'
              placeholder='????????????????'
              value={name}
              setValue={nameHandler}
            />
            <Input
              name='description'
              type='text'
              placeholder='????????????????'
              value={description}
              setValue={descriptionHandler}
            />
            <Input
              name='price'
              type='text'
              placeholder='????????(????)'
              value={price}
              setValue={priceHandler}
            />
          </div>
          <div className='create__inputs-sizes'>
            <h6>????????????(????):</h6>
            <Input
              name='width'
              type='text'
              placeholder='????????????'
              value={width}
              setValue={widthHandler}
            />
            <Input
              name='height'
              type='text'
              placeholder='????????????'
              value={height}
              setValue={heightHandler}
            />
            <Input
              name='depth'
              type='text'
              placeholder='??????????????'
              value={depth}
              setValue={depthHandler}
            />
          </div>
          <div className='create__inputs'>
            <h6>??????????:</h6>
            <Input
              name='colors'
              type='text'
              placeholder='??????????, ???????????? ?? ??.??'
              value={colors}
              setValue={colorsHandler}
            />
          </div>
          <div className='create__inputs'>
            <h6>??????:</h6>
            <div>
              <input
                type='radio'
                name='radio'
                id='choice1'
                value={'bed'}
                checked={selectedOption === 'bed'}
                onChange={chekedHandler}
              />
              <label htmlFor='choice1'>??????????????</label>
            </div>
            <div>
              <input
                type='radio'
                name='radio'
                id='choice2'
                value={'couch'}
                checked={selectedOption === 'couch'}
                onChange={chekedHandler}
              />
              <label htmlFor='choice2'>??????????</label>
            </div>
            <div>
              <input
                type='radio'
                name='radio'
                id='choice3'
                value={'chair'}
                checked={selectedOption === 'chair'}
                onChange={chekedHandler}
              />
              <label htmlFor='choice2'>????????</label>
            </div>
            <div>
              <input
                type='radio'
                name='radio'
                id='choice4'
                value={'cupboard'}
                checked={selectedOption === 'cupboard'}
                onChange={chekedHandler}
              />
              <label htmlFor='choice4'>????????</label>
            </div>
            <div>
              <input
                type='radio'
                name='radio'
                id='choice9'
                value={'table'}
                checked={selectedOption === 'table'}
                onChange={chekedHandler}
              />
              <label htmlFor='choice9'>????????</label>
            </div>
            <div>
              <input
                type='radio'
                name='radio'
                id='choice5'
                value={'chest'}
                checked={selectedOption === 'chest'}
                onChange={chekedHandler}
              />
              <label htmlFor='choice5'>??????????</label>
            </div>
            <div>
              <input
                type='radio'
                name='radio'
                id='choice6'
                value={'rack'}
                checked={selectedOption === 'rack'}
                onChange={chekedHandler}
              />
              <label htmlFor='choice6'>??????????????</label>
            </div>
            <div>
              <input
                type='radio'
                name='radio'
                id='choice7'
                value={'armchair'}
                checked={selectedOption === 'armchair'}
                onChange={chekedHandler}
              />
              <label htmlFor='choice7'>????????????</label>
            </div>
            <div>
              <input
                type='radio'
                name='radio'
                id='choice8'
                value={'kid'}
                checked={selectedOption === 'kid'}
                onChange={chekedHandler}
              />
              <label htmlFor='choice8'>?????????????? ????????????</label>
            </div>
          </div>
          <div className='create__inputs'>
            <h6>???????????????? ?? ????????(???????????????? ????????????????????):</h6>
            <Input
              name='material'
              type='text'
              placeholder='???????????????? ????????????, ???????????????????????? ?? ??.??'
              value={material}
              setValue={materialHandler}
            />
          </div>
          <div className='create__photos'>
            <h6>??????????????????????(4):</h6>
            <input
              type='file'
              onChange={(e) => setPhotos((prev) => [...prev, e.target.files[0]])}
            />
            <input
              type='file'
              onChange={(e) => setPhotos((prev) => [...prev, e.target.files[0]])}
            />
            <input
              type='file'
              onChange={(e) => setPhotos((prev) => [...prev, e.target.files[0]])}
            />
            <input
              type='file'
              onChange={(e) => setPhotos((prev) => [...prev, e.target.files[0]])}
            />
          </div>
          <div className='create__button'>
            {loading ? (
              <div style={{ marginRight: 30 }}>
                <Spinner animation='border' variant='primary' />
              </div>
            ) : (
              <LoginButton
                disabled={disabled}
                title={'??????????????'}
                color={'#111111'}
                textColor={'#fff'}
                onClick={onSubmit}
                width={100}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreateProduct;
