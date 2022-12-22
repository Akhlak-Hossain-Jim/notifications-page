import React from "react";
import styled from "styled-components";

export default function Header({ left, clickFunction }) {
  return (
    <Container>
      <div className="header_left">
        <h1>Notifications</h1>
        {left && left !== 0 ? (
          <div className="notification_to_read">{left}</div>
        ) : null}
      </div>
      <div className="header_right">
        <button onClick={clickFunction}>Mark as read</button>
      </div>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  .header {
    &_left {
      display: flex;
      align-items: center;
      gap: 12px;
      & > h1 {
        font-size: 1.5rem;
        color: var(--gray-600);
        font-weight: 800;
      }
      & > .notification_to_read {
        font-weight: 800;
        color: var(--white);
        background-color: var(--blue);
        padding: 2px 11px 4px;
        border-radius: 6px;
      }
    }
    &_right {
      & > button {
        border: none;
        outline: none;
        background: none;
        text-align: center;
        padding: 0;
        margin: 0;
        color: var(--gray-500);
        font-size: 1rem;
        font-weight: 500;
        &:hover {
          color: var(--blue);
        }
      }
    }
  }
`;
