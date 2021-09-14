import * as s from "./style";
import { BsFillGearFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";

import { db } from "../../firebaseApi";
import { useAuth } from "../../providers/Auth";

import { firebaseApp } from "../../firebaseApi";

const Profile = () => {
  const { loggedUser, setLoggedUser } = useAuth();

  const [userData, setUserData] = React.useState({});
  let docRef = {};

  React.useEffect(() => {
    if (loggedUser !== null) {
      docRef = db.collection("Users").doc(loggedUser.uid);

      docRef.get().then((doc) => {
        setUserData(doc.data());
      });
    }
  }, [loggedUser]);

  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    history.push("/profile-edit");
  };

  const handleLogOut = () => {
    firebaseApp.auth().signOut();
    setLoggedUser(null);
    history.push("/");
  };

  return (
    <s.Container>
      <s.Content>
        <div>
          <BsFillGearFill
            className="icone-opcoes"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleEdit}>Editar</MenuItem>
            <MenuItem onClick={handleLogOut}>Sair</MenuItem>
          </Menu>
        </div>
        <div className="cabecalho-informacoes">
          <BsPencilSquare className="icone-editar" onClick={handleEdit} />
          <img src={userData.img_url} alt="imagem do perfil" />
          <div className="informacoes">
            <p className="nome">{userData.user}</p>
            <p className="bio">{userData.bio}</p>
          </div>
        </div>
        <p className="numero-postagens">
          {userData.posts} <span>postagens</span>
        </p>
      </s.Content>
    </s.Container>
  );
};

export default Profile;
