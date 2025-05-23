"use client";

import { useState, useEffect } from "react";

import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import InputMsg from "./_component/inputMsg";

// ブロックを選択してから、メッセージを変更する画面
export default function BlockPage() {

  // ブロック一覧
  const [blocks, setBlocks] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState("");
  const [msgs, setMsgs] = useState([]);

  // コードの選択
  const selectedCode = (e, code) => {
    e.preventDefault();
    setSelectedBlock(code);
  }

  // メッセージ設定画面を閉じる
  const closeMsgConf = () => {
    setSelectedBlock("");
  }

  useEffect(
    // ブロック一覧を取得する
    () => {
      const b = [
        {
          code: "12345678901",
          category: "test",
          latitude: 1234,
          longitude: 2345,
          install: 1,
          buildingfloor: 1,
          name: "ブロック０１"
        },
        {
          code: "12345678901",
          category: "test",
          latitude: 1234,
          longitude: 2345,
          install: 1,
          buildingfloor: 1,
          name: "ブロック０１"
        },
        {
          code: "12345678901",
          category: "test",
          latitude: 1234,
          longitude: 2345,
          install: 1,
          buildingfloor: 1,
          name: "ブロック０１"
        },
      ]
      setBlocks(b)
    }
    , []);

  return (<>
    <main>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>code</th>
            <th>name</th>
            <th>category</th>
            <th>latitude</th>
            <th>longitude</th>
            <th>buildingfloor</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block, index) =>
            <tr key={index}>
              <td><a href="" onClick={(e) => selectedCode(e, block.code)}>{block.code}</a></td>
              <td>{block.name}</td>
              <td>{block.category}</td>
              <td>{block.latitude}</td>
              <td>{block.longitude}</td>
              <td>{block.buildingfloor}</td>
            </tr>
          )}
        </tbody>
      </Table>

      <InputMsg selectedBlock={selectedBlock} setSelectedBlock={setSelectedBlock} />

    </main>
  </>);
}
