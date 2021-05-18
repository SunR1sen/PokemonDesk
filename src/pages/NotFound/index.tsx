import React from 'react';
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
      <div className={s.title}>The rocket team has won this time.</div>
      <Button color={ButtonColors.yellow} onClick={() => console.log('RETURN CLICK')}>
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
