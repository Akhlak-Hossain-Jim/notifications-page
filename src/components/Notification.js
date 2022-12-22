import React from "react";
import styled from "styled-components";

export default function Notification({
  active,
  profile_picture,
  name,
  initial,
  post_name,
  club_name,
  message,
  post_picture,
  time,
}) {
  return (
    <Container className={active ? "unread" : ""}>
      <div className="profile_image">
        <img src={profile_picture && profile_picture} alt={name && name} />
      </div>
      <div className="notification_info">
        <div className="notification_info__con">
          <div className="notification_info__con_left">
            <p className="notification_info__con_left__data">
              {name && (
                <span className="notification_info__con_left__data_name">
                  {name}
                </span>
              )}{" "}
              {initial && (
                <span className="notification_info__con_left__data_initial">
                  {initial}
                </span>
              )}{" "}
              {club_name && (
                <span className="notification_info__con_left__data_clubName">
                  {club_name}
                </span>
              )}{" "}
              {post_name && (
                <span className="notification_info__con_left__data_postName">
                  {post_name}
                </span>
              )}{" "}
              {active && (
                <span className="notification_info__con_left__data_unread">
                  <i></i>
                </span>
              )}
            </p>
            {time && (
              <p className="notification_info__con_left__ago">{time} ago</p>
            )}
          </div>
          {post_picture && (
            <div className="notification_info__con_right">
              <div className="notification_info__con_right__image">
                <img src={post_picture} alt="post asset preview" />
              </div>
            </div>
          )}
        </div>
        {message && <div className="notification_info__message">{message}</div>}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 18px;
  padding: 18px;
  border-radius: 6px;
  &.unread {
    background-color: var(--gray-100);
  }
  @media (max-width: 548px) {
    gap: 12px;
    padding: 16px;
  }
  .profile_image {
    width: 46px;
    @media (max-width: 548px) {
      width: 40px;
    }
    & > img {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }
  }
  .notification_info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    &__con {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      &_left {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 5px;
        color: var(--gray-400);
        &__data {
          &_name {
            color: var(--gray-600);
            font-weight: 800;
            cursor: pointer;
            &:hover {
              color: var(--blue);
            }
          }
          &_clubName {
            color: var(--blue);
            font-weight: 800;
            cursor: pointer;
            &:hover {
              color: var(--blue);
            }
          }
          &_postName {
            color: var(--gray-500);
            font-weight: 800;
            cursor: pointer;
            &:hover {
              color: var(--blue);
            }
          }
          &_unread {
            display: inline-flex;
            margin-left: 8px;
            & > i {
              width: 8px;
              aspect-ratio: 1/1;
              border-radius: 50%;
              background-color: var(--red);
              margin: auto;
            }
          }
        }
        &__ago {
        }
      }
      &_right {
        &__image {
          width: 51px;
          aspect-ratio: 1/1;
          border: 3px solid transparent;
          border-radius: 8px;
          overflow: hidden;
          @media (max-width: 548px) {
            width: 45px;
          }
          &:hover {
            border: 3px solid var(--gray-300);
          }
          & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
      }
    }
    &__message {
      padding: 17px 20px;
      border-radius: 6px;
      border: 1px solid var(--gray-200);
      color: var(--gray-400);
      cursor: pointer;
      text-decoration: none;
      @media (max-width: 548px) {
        padding: 14px;
      }
      &:hover {
        background: var(--gray-200);
      }
    }
  }
`;
