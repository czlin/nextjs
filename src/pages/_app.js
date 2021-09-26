import '../styles/global.css'
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider locale={zhCN}>
      <Component { ...pageProps } />
    </ConfigProvider>
  );
}