import marginAndPaddings from "./marginsAndPaddings"
import drawerMenu from "./drawerMenu"

const css = {
    body: {
        minHeight: "100vh",
        width: "100vw",
    },
    ...marginAndPaddings,
    ...drawerMenu,
    

    bottomNavigation: {
        flex: 1,
        justifyItems: "stretch"
    },
    viewContainer: { 
        overflow: "scroll", 
        height: "calc(100vh - 120px)", 
        ...marginAndPaddings.p_3 
    },

    row: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
    },
      
    column: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        flex: 1
    }
};

export default css;