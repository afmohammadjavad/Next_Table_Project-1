import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import 'antd/dist/antd.css'
import MyTable from '../components/Table/MyTable'

export default function Home() {
  return (
    <MyTable />
  )
}
