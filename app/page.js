"use client";

import { useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Link from 'next/link';

export default function LoginPage() {

  const [auth, setAuth] = useState(true);

  return (<>
      {auth ?
        <>
        <p>ログインしました</p>
        </>
        :
        <p>ログイン</p>
      }
  </>);
}
