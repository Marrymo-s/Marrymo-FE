'use client';

import React, { useState, useEffect } from 'react';
import { searchResponse } from '@/types/search';
import { useRouter } from 'next/navigation';
import * as styles from './index.css';
import Image from 'next/image';

import { fetchInstance } from '@/services';

import { userInfoStore } from '@/store/store';


interface WishListItem {
  wishItemSequence: number;
  name: string;
  price: number;
  img: string;
}

interface RegistrationProps {
  refresh: () => void;
  trigger: boolean;
}

const Registration = ({ refresh, trigger }:RegistrationProps) => {
  const [wishLists, setWishLists] = useState<WishListItem[]>([]);
  const router = useRouter();
  const userCode = userInfoStore((state) => state.userCode);


  // useEffect(() => {
  //   getWishData()
  // }, [wishLists])

  useEffect(() => { // 수정된 useEffect 사용법
    const getWishData = async () => {
      try {
        const response = await fetchInstance(`/wish-item/${userCode}`);
        console.log(response);
        setWishLists(response.items)
      } catch(error) {
        console.error('에러 ㅋ', error);
      }
    };
    getWishData();
  }, [trigger, userCode]);

  console.log(wishLists)
  // const goToDetail = () => {
  //   router.push(`/detail/${userCode}/${value}`);
  //   console.log(userCode)
  // }

  return (
    <div className={styles.registrationContainer}>
      <h3>나의 WISHLIST</h3>
      <div className={styles.registrationOuterWrapper}>
        <div className={styles.registrationInnerWrapper}>
          {wishLists.map((wishlist, index) => (
            <div
              key={wishlist.wishItemSequence}
              className={styles.wishlistImageWrapper}>
              {wishlist.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registration;