import { useEffect, useRef, useState } from "react";

interface ISocket {
  send: (data: string) => void;
}

export const useWs = ({ url }: { url: string }) => {
  const [isReady, setIsReady] = useState(false);
  const [data, setData] = useState(null);

  const ws = useRef<ISocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => setIsReady(true);
    socket.onclose = () => setIsReady(false);
    socket.onmessage = (event) => setData(event.data);

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  // bind is needed to make sure `send` references correct `this`
  return [isReady, data, ws.current?.send.bind(ws.current)];
};

/*
Usage:
export const WsComponent = () => {
  const [ready, data, send] = useWs("wss://echo.websocket.events/")

  useEffect(() => {
    if (ready) {
      send("test message")
    }
  }, [ready, send]) // make sure to include send in dependency array

  return (
    <div>
      Ready: {JSON.stringify(ready)}, Data: {data}
    </div>
  )
}
*/
