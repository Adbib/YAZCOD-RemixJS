import {
  ActionFunction,
  LoaderFunction,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import React from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Container,
  Form as FormB,
  Nav,
  Row,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import EditorCotainer from "~/components/EditorCotainer";
import get_configs from "~/utils/db/general/get_configs";
import update_configs from "~/utils/db/general/update_configs";
type Props = {};

export const action: ActionFunction = async ({ request, ...o }) => {
  //   console.log("action", o);
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5_000_000,
      directory: "public/uploads",
      file: ({ filename }) => filename,
    }),
    // parse everything else into memory
    unstable_createMemoryUploadHandler()
  );

  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const data: {
    siteTitle?: string;
    siteDescription?: string;
    siteLogo?: string | null;
    siteLogoOld?: string | null;
    siteCover?: string | null;
    siteCoverOld?: string | null;
    siteKeywords?: null | JSON | Object;
    OriginalSiteTitle?: string | null | undefined;
    topMessage?: Object | JSON | null;
    menus?: Object | JSON | null;
    singleProduct: Object | JSON;
  } = Object.fromEntries(formData);
  // console.log(data);
  // return 0;
  //   return "";
  const fileLogo: FormDataEntryValue | null | any = formData.get("siteLogo");
  const fileCover: FormDataEntryValue | null | any = formData.get("siteCover");
  //   console.log("file", file);
  const active = data && data.siteTopMessageActive === "on" ? true : false;
  data.singleProduct = { chekcoutMode: data.chekcoutMode };
  delete data.chekcoutMode;
  data.topMessage = {
    message: data.siteTopMessage,
    active,
    color: data?.topMessageBackground,
  };
  if (fileLogo && fileLogo?.size !== 0)
    data.siteLogo = "http://localhost:3000/uploads/" + fileLogo?.name;
  else data.siteLogo = data.siteLogoOld || null;
  if (data && data.siteKeywords && data.siteKeywords.length > 0)
    data.siteKeywords = { keywords: data.siteKeywords.split(",") };
  else data.siteKeywords = null;
  if (fileCover && fileCover?.size !== 0)
    data.siteCover = "http://localhost:3000/uploads/" + fileCover?.name;
  else data.siteCover = data.siteCoverOld || null;

  let i = 0;
  const get_menus_admin = Object.keys(data).map(function (key, index) {
    if (key.includes("menu-") && !key.includes("menu-link")) {
      const bla = { name: data[key], link: data[`menu-link-${i}`] };
      delete data[key];
      delete data[`menu-link-${i}`];
      i += 1;
      return bla;
    }
    return null;
  });
  const menus = get_menus_admin.filter((item, i) => {
    return item !== null;
  });
  data.menus = menus;

  const get_forms_product = Object.keys(data).map(function (key, index) {
    if (key.includes("contact-form")) {
      const bla = { name: key, value: data[key] };
      delete data[key];
      return bla;
    }
    return null;
  });
  const forms = get_forms_product.filter((item, i) => {
    return item !== null;
  });
  data.singleProduct.forms = forms;
  console.log(forms);
  //   console.log("menus", menus);
  // console.log("data", data);

  //   return "";
  const updateConfigs = await update_configs(data.OriginalSiteTitle, data);
  console.log(updateConfigs);
  return "";
};

export const loader: LoaderFunction = async () => {
  const getConfigs = await get_configs();
  return getConfigs.data[0];
};
export default function Index({}: Props) {
  const transition = useTransition();
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const [inputsNumber, setInputsNumber] = React.useState(loaderData.menus);
  const contactfrom = new Array(6).fill(0);
  const [contactNumber, setContactNumber] = React.useState(contactfrom); //["key", "key"]
  const data = actionData || loaderData;
  // console.log(loaderData);
  return (
    <EditorCotainer title="Parameters" desc="lorem text of lorem ">
      <Form encType="multipart/form-data" method="post">
        <Tabs
          defaultActiveKey="general"
          id="uncontrolled-tab-example"
          className="mb-3 parameter-tabs"
        >
          <Tab eventKey="general" title="General">
            {/* <Form encType="multipart/form-data" method="post"> */}
            <br />
            <h5>General Parameters : </h5>
            <FormB.Group className="mb-3" controlId="formBasicEmail">
              <FormB.Label>Site Title : </FormB.Label>
              <FormB.Control
                // style={{ padding: "0 !important" }}
                required
                name="siteTitle"
                type="text"
                placeholder="Store Title"
                defaultValue={data?.siteTitle}
              />
              <FormB.Control
                name="OriginalSiteTitle"
                type="text"
                hidden
                defaultValue={data?.siteTitle}
              />
            </FormB.Group>
            <FormB.Group className="mb-3" controlId="formBasicEmail">
              <FormB.Label>Site Description : </FormB.Label>
              <FormB.Control
                // style={{ padding: "0 !important" }}
                name="siteDescription"
                type="text"
                placeholder="Store Description"
                defaultValue={data?.siteDescription}
              />
            </FormB.Group>
            <FormB.Group className="mb-3" controlId="formBasicEmail">
              <FormB.Label>Store Logo : </FormB.Label>
              <FormB.Control
                style={{ padding: "0 !important" }}
                name="siteLogo"
                type="file"
                placeholder="Logo"
                // defaultValue={data?.siteLogo}
                // value={data?.siteLogo}
              />
              <FormB.Control
                style={{ padding: "0 !important" }}
                name="siteLogoOld"
                type="text"
                // placeholder="Logo"
                defaultValue={data?.siteLogo}
                hidden
              />
            </FormB.Group>

            <FormB.Group className="mb-3" controlId="formBasicEmail">
              <FormB.Label>Store keywords : </FormB.Label>
              <FormB.Control
                as="textarea"
                name="siteKeywords"
                placeholder="Keywords"
                style={{ height: "100px" }}
                defaultValue={loaderData?.siteKeywords.keywords}
              />
              <FormB.Text className="text-muted">
                You can separate keywords with comma.
              </FormB.Text>
            </FormB.Group>
            <FormB.Group className="mb-3" controlId="formBasicEmail">
              <FormB.Label>Site Top Message : </FormB.Label>
              <FormB.Group className="mb-3" controlId="formBasicEmail">
                <FormB.Check
                  type="switch"
                  defaultChecked={data?.topMessage?.active}
                  id="custom-switch"
                  name="siteTopMessageActive"
                  label="Active/Disable Message header"
                  //   style={{
                  //     marginTop: "0 !important",
                  //     width: "45px !important",
                  //     height: "25px !important",
                  //   }}
                />
              </FormB.Group>
              <FormB.Control
                // style={{ padding: "0 !important" }}
                name="siteTopMessage"
                type="text"
                placeholder="Message"
                defaultValue={data?.topMessage.message}
              />
            </FormB.Group>
            <FormB.Group className="mb-3" controlId="formBasicEmail">
              <FormB.Label htmlFor="exampleColorInput">
                Background Color :{" "}
              </FormB.Label>
              <FormB.Control
                type="color"
                id="exampleColorInput"
                defaultValue={
                  data?.topMessage?.color ? data?.topMessage?.color : "#563d7c"
                }
                title="Choose your color"
                name="topMessageBackground"
              />
            </FormB.Group>
            {/* <Form method="post"> */}
            <FormB.Group className="mb-3" controlId="formBasicEmail">
              <FormB.Label htmlFor="exampleColorInput">Menu :</FormB.Label>
              {inputsNumber.map((item: any, index: number) => {
                return (
                  <div style={{ display: "flex" }}>
                    <FormB.Control
                      className="mb-3 mr-1"
                      name={"menu-" + index}
                      key={index}
                      type="text"
                      placeholder="Menu name"
                      defaultValue={item.name}
                    />
                    <FormB.Control
                      className="mb-3"
                      name={"menu-link-" + index}
                      key={"link-" + index}
                      type="text"
                      placeholder="Menu link"
                      defaultValue={item.link}
                    />
                    <span
                      style={{
                        right: 0,
                        position: "relative",
                        top: 0,
                        left: 8,
                        background: "black",
                        height: 21,
                        fontSize: 16,
                        fontWeight: "500",
                        // lineHeight: 24,
                        color: "#fff",
                        display: "inline-block",
                        width: 44,
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "initial",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        inputsNumber.splice(index, 1);
                        setInputsNumber([...inputsNumber]);
                      }}
                    >
                      x
                    </span>
                  </div>
                );
              })}
              <div style={{ justifyContent: "end", display: "flex" }}>
                <Button
                  onClick={() => setInputsNumber([...inputsNumber, "key"])}
                  variant="primary"
                >
                  Add
                </Button>
                {/* <Button variant="info" type="submit">
                    save
                  </Button> */}
              </div>
            </FormB.Group>
            {/* </Form> */}
            {/* </Form> */}
          </Tab>
          <Tab eventKey="home_page" title="Home Page">
            {/* <Form encType="multipart/form-data" method="post"> */}
            <br />
            <h5>Home Page Parameters : </h5>
            <FormB.Group className="mb-3" controlId="formBasicEmail">
              <FormB.Label>Store Cover : </FormB.Label>
              <FormB.Control
                style={{ padding: "0 !important" }}
                name="siteCover"
                type="file"
                placeholder="Logo"
                // defaultValue={data?.site}
              />
              <FormB.Control
                style={{ padding: "0 !important" }}
                name="siteCoverOld"
                type="text"
                defaultValue={data?.siteCover}
                hidden
              />
            </FormB.Group>
            {/* </Form> */}
          </Tab>
          {/* </Form> */}
          <Tab eventKey="singleProduct" title="Product Page">
            {/* <Form encType="multipart/form-data" method="post"> */}
            <br />
            <h5>Product Page Parameters : </h5>
            <FormB.Group className="mb-3">
              <FormB.Select name="chekcoutMode" aria-label="Checkout Options">
                <option
                  defaultChecked={
                    data.singleProduct.chekcoutMode === "OneClick"
                  }
                  value="OneClick"
                >
                  One click checkout
                </option>
                <option
                  defaultChecked={data.singleProduct.chekcoutMode === "Normale"}
                  value="Normale"
                >
                  Normale add to cart
                </option>
              </FormB.Select>
            </FormB.Group>
            <FormB.Group className="mb-3" controlId="formBasicEmail">
              <FormB.Label htmlFor="exampleColorInput">Menu :</FormB.Label>
              {data.singleProduct.forms.map((item: any, index: number) => {
                return (
                  <div key={index} style={{ display: "flex" }}>
                    {/* // <FormB.Control
                    //   className="mb-3 mr-1"
                    //   name={"menu-" + index}
                    //   key={index}
                    //   type="text"
                    //   placeholder="Menu name"
                    //   defaultValue={item.name}
                    // /> */}
                    <FormB.Control
                      className="mb-3"
                      name={"contact-form-" + index}
                      // key={"link-" + inde:x}
                      type="text"
                      placeholder={"Contact Form " + index}
                      defaultValue={item.value} //{"Form " + index} //{item.link}
                    />
                    <span
                      style={{
                        right: 0,
                        position: "relative",
                        top: 0,
                        left: 8,
                        background: "black",
                        height: 21,
                        fontSize: 16,
                        fontWeight: "500",
                        // lineHeight: 24,
                        color: "#fff",
                        display: "inline-block",
                        width: 21,
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "initial",
                        cursor: "pointer",
                      }}
                      // onClick={() => {
                      //   inputsNumber.splice(index, 1);
                      //   setInputsNumber([...inputsNumber]);
                      // }}
                    >
                      x
                    </span>
                  </div>
                );
              })}
              <div style={{ justifyContent: "end", display: "flex" }}>
                <Button
                  onClick={() => setInputsNumber([...inputsNumber, "key"])}
                  variant="primary"
                >
                  Add
                </Button>
              </div>
            </FormB.Group>
            {/* <Button
              disabled={transition.submission}
              type="submit"
              variant="dark"
            >
              Save
            </Button> */}
            {/* </Form> */}
          </Tab>
        </Tabs>
        <br />
        <Button disabled={transition.submission} type="submit" variant="dark">
          Save
        </Button>
      </Form>
      {/* <Button variant="info">Info</Button> */}
    </EditorCotainer>
  );
}
