import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Notification from "./components/Notification";
import data from "./data/data.json";

export default function App() {
  const [DATA, setDATA] = useState([...data.notifications]);
  const [leftToRead, setLeftToRead] = useState(0);

  const handleMarkAllAsRead = () => {
    let array = [...DATA];
    let count = 0;
    for (let el of array) {
      el.active = false;
    }
    for (let el of array) {
      if (el.active) {
        count++;
      }
    }
    setLeftToRead(count);
    setDATA(array);
  };

  useEffect(() => {
    let count = 0;
    for (let el of DATA) {
      if (el.active) {
        count++;
      }
    }
    setLeftToRead(count);
  }, []);

  return (
    <Container>
      <Header clickFunction={handleMarkAllAsRead} left={leftToRead} />
      <section className="notifications">
        {DATA &&
          Array.isArray(DATA) &&
          DATA.length > 0 &&
          React.Children.toArray(
            DATA.map((data) => <Notification {...data} />)
          )}
      </section>
    </Container>
  );
}

const Container = styled.main`
  width: min(730px, 100%);
  margin: 63px auto 90px;
  background-color: var(--white);
  border-radius: 12px;
  padding: 30px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 548px) {
    margin: 0;
    border-radius: 0;
    padding: 16px;
  }
  .notifications {
    margin-top: 31px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (max-width: 548px) {
      margin-top: 25px;
      gap: 12px;
    }
  }
`;
