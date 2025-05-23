'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>メニュー</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Row><Col>
              <Link href="/block" onClick={handleClose}>メッセージ修正</Link>
            </Col></Row>
            <Row>
              <Link href="/msg" onClick={handleClose}>メッセージ一覧</Link>
            </Row>
            <Row>
              <Link href="/delegate" onClick={handleClose}>メッセージ管理委任</Link>
            </Row>
          </Offcanvas.Body>
        </Offcanvas>
        
        <Container fluid>
          <Row><h2>しゃべる点字ブロック管理機能</h2></Row>
          <Row>
            <Col>
              <Button variant="primary" onClick={handleShow}>
                メニュー
              </Button>
            </Col>
            <Col><Button variant="primary">ログアウト</Button></Col>
          </Row>
          {children}

        </Container>

      </body>
    </html>
  );
}
