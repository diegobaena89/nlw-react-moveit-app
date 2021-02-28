import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile () {
const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/diegobaena89.png" alt="Diego Baena"/>
      <div>
        <strong>Diego Baena</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}