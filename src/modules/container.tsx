import Header from "./header";
import Bottom from "./bottom";
export default function Container(props) {
  console.log("props...", props);
  return (
    props.moduleList &&
    props.moduleList.map((v, i) => {
      switch (v.id) {
        case 1: {
          return <Header />;
        }
        case 2: {
          return <Bottom />;
        }
      }
    })
  );
}
