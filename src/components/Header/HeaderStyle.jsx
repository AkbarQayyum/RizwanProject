

const HeaderStyle = {
  upperNavone: {
    background: "#F8F9FA",
    // width: "100%",
  },
  upperNav: {
    position: "fixed",
    top: 0,
    zIndex: 1000,
    padding: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    background: "#F8F9FA",
    height: { md: "3vh", xs: "30px", sm: "30px" },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainBox: {
    display: "flex",
    alignContent: "center",
  },
  headerNavBox: {
    position: "fixed",
    zIndex: 2,
    left: 0,
    right: 0,
    top: 0,
    opacity: 9,
    // height:"90px"
    // padding: "10px",
  },
  HeaderItem: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    justifyContent:"space-between",
  },
  navbar: {
    width: "100%",
    height: "80px",
  },
};

export default HeaderStyle;
