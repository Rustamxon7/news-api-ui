import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSources } from '../../redux/actions/sources';

import './Nav.scss';
import logo from '../../assets/logo.svg';
import spinner from '../../assets/spinner.svg';

import { Button } from '../UI/Button';
import { SaveCteatedTime, SavedTime } from '../utils/saveTime';

const Nav = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const sources = useSelector((state) => state.sources.sources);

  const handleCreateSource = async () => {
    setLoading(true);

    await dispatch(getSources());

    setLoading(false);
  };

  useEffect(() => {
    SaveCteatedTime(sources);
  }, [sources]);

  const fullTime = SavedTime();

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>
      <span className="nav__btn--disabled">
        {fullTime.length > 0 ? ` (Last saved ${fullTime})` : ' (Saved)'}
      </span>
      <Button className="nav__btn" onClick={handleCreateSource}>
        {loading ? (
          <>
            <img src={spinner} alt="" />
            <span>Updating</span>
          </>
        ) : (
          <span>Save Changes</span>
        )}
      </Button>
    </div>
  );
};

export default Nav;
