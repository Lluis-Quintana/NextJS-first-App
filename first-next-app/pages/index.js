/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import colors from '../styles/theme';
import Button from '../components/Button';
import Avatar from '../components/Avatar';
import {
  loginWithGitHub,
  onAuthStateChanged
} from '../firebase/client';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  function handleClick() {
    loginWithGitHub().then((user) => {
      setUser(user);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>DevTer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <img className="logo" alt="logo_img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe7%2FMobiusStrip-01.png%2F220px-MobiusStrip-01.png&f=1&nofb=1" />
          <h1>
            DevTer
          </h1>
          <h3>Talk about development with developers</h3>
          <div>
            {
            user === null
              && (
                <Button onClick={handleClick}>
                  <img className="github_logo" alt="github_logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F25%2F25231.png&f=1&nofb=1" />
                  Login with GITHUB
                </Button>
              )
            }
            {
              user && user.avatar
            && (
            <div className="user__info">
              <Avatar
                src={user.avatar}
                alt={user.username}
                text={user.username}
                withText
              />
            </div>
            )
            }
          </div>
        </main>
      </div>
      <style jsx>
        {`
      .logo{
        width:50%;
      }
      font-size:1.2rem;
      }
      h1{
        color:${colors.primary};
      }
      h3{
        color: ${colors.secondary}
      }
      .github_logo{
        width:25px;
        margin-right:.5rem;
      }
      `}
      </style>
    </>
  );
}
