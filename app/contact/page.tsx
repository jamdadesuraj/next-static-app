import { Input, Textarea } from "@nextui-org/input";
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/card";

import CustomButton from "@/components/common/CustomButton";
import { title } from "@/components/primitives";
import { addUser } from "@/lib/action";
const Contact = () => {
  return (
    <>
      <div className="mb-7">
        <div className="py-4 px-5 rounded-md flex justify-center mb-4">
          <h1 className={title()}>Contact</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
          <div className="w-full md:w-1/2 lg:w-7/12">
            <iframe
              allowFullScreen
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30270.719001522873!2d73.80661599999999!3d18.4909109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719565479383!5m2!1sen!2sin"
              style={{ border: 0 }}
              title="Google Map"
              width="100%"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12 shadow-lg  border p-4 rounded-lg">
            <h2 className="mb-4">Get In Touch</h2>
            <form action={addUser}>
              <Input
                className="mb-4"
                label="Name"
                name="name"
                placeholder="Enter your Full Name"
                variant="bordered"
              />
              <Input
                className="mb-4"
                label="Email"
                name="email"
                placeholder="Enter your Email"
                variant="bordered"
              />
              <Input
                className="mb-4"
                label="Mobile"
                name="mobile"
                placeholder="Enter your Mobile No."
                variant="bordered"
              />
              <Textarea
                className="mb-4"
                label="Description"
                name="desc"
                placeholder="Enter your description"
                variant="bordered"
              />
              <CustomButton type="submit">Submit</CustomButton>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <Card>
            <CardBody>
              <Link href="/">
                <h2>Phone : 123-456-7890 </h2>
                <h2>Phone : 123-456-7890 </h2>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Link href="/">
                <h2>Email : 123-456-7890 </h2>
                <h2>Eamil : 123-456-7890 </h2>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Link href="/">
                <h2>Address : new York </h2>
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact;
