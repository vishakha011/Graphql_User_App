import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Styled from "./UserForm.styles";
import Button from "../../Button/Button";
import {CREATE_USER_MUTATION} from "../../../GraphQL/Mutations";
import { useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";


const UserForm = ({buttonText}) => {
  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
  let history = useHistory();


    const formik = useFormik({
        initialValues: {
            userFirstName:'',
            userLastName:'',
            userNumber:'',
        },
        validationSchema: Yup.object({
            userFirstName: Yup.string().max(10, 'Must be 10 characters or less').required('Required'),
            userLastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            userNumber: Yup.number().required('Required')
        }),
        onSubmit: values => {
          console.log(values);
          createUser({
            variables: {
              userFirstName: values.userFirstName,
              userLastName: values.userLastName,
              userNumber: values.userNumber
            },
          });
          history.push("/")
          if(error) {
            console.log(error);
          }
        }
    })
    return (
        <>
        <Styled.Container>
            <Styled.Title>User Details</Styled.Title>
        </Styled.Container>

        <Styled.Container>       
            <form onSubmit={formik.handleSubmit}>
                <Styled.InputDiv>
                    <Styled.Label htmlFor="userFirstName">First Name</Styled.Label>
                    <Styled.Input
                      id="userFirstName"
                      name="userFirstName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.userFirstName}
                    />
                    {formik.touched.userFirstName && formik.errors.userFirstName ? (
                    <div>{formik.errors.userFirstName}</div>
                  ) : null}
                </Styled.InputDiv>

                <Styled.InputDiv>
                <Styled.Label htmlFor="userLastName">Last Name</Styled.Label>
                    <Styled.Input
                      id="userLastName"
                      name="userLastName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.userLastName}
                    />
                </Styled.InputDiv>
                
                <Styled.InputDiv>
                  <Styled.Label htmlFor="userNumber">Contact Number</Styled.Label>
                      <Styled.Input
                        id="userNumber"
                        name="userNumber"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.userNumber}
                      />
                </Styled.InputDiv>
            
                <Button 
                  type="submit" 
                  buttonText="Submit"
                />
            </form>
        </Styled.Container>
        </>
    )
};


export default UserForm;

