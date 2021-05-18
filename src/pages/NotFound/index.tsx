import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import image404 from './assets/404.png';
import rocketTeamImg from './assets/teamRocket.png';
import Button, { ButtonColors } from '../../components/Button';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.images}>
        <img className={s.image} src={image404} alt="404" />
        <img className={s.image} src={rocketTeamImg} alt="Rocket Team" />
      </div>
      <div className={s.title}>
        <span className={s.lightText}>The rocket team</span> has won this time.
      </div>
      <Button color={ButtonColors.yellow} onClick={() => navigate('/')}>
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
