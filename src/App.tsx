import * as React from 'react';
import './App.css';
import { chattoStore } from './store';
import { Provider } from 'react-redux';
import { ChattoConnected } from './component/Chatto';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import {
    UserProvider,
    UserContext,
    IUserProviderState
} from './context/user/User.context';

import bg from './bg.jpg';
import { CSSProperties } from 'react';

const appDivStyle: CSSProperties = {
    backgroundImage: 'url(' + bg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(15px)'
};

class App extends React.Component {

    render() {
        // tslint:disable
        return (
            <Provider store={chattoStore}>
                <div className='App'>
                    <Container>
                        <Row>
                            <Col>
                                {/*
                                  * For the first Chatto component
                                  * Test of the new react context api
                                  *
                                  * @link https://reactjs.org/docs/context.html#when-to-use-context
                                  * */}
                                <UserProvider>
                                    <UserContext.Consumer>
                                        {({user, toggleUser}: IUserProviderState) => (
                                            // react fragment
                                            <>
                                                < ChattoConnected user={user}/>
                                                {/*
                                                  * Use to toggle user from the context
                                                  * provide by <UserProvider/>
                                                  * */}
                                                {/*<Button onClick={toggleUser}>
                                                    ToggleUser from parent component
                                                </Button>*/}
                                            </>
                                        )}
                                    </UserContext.Consumer>
                                </UserProvider>
                            </Col>
                            <Col>
                                {/*
                                  * The second Chatto component have a simple user props
                                  * */}
                                <ChattoConnected user={{
                                    id: 2,
                                    name: 'Bar',
                                    pic: ' data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCACAAIADASIAAhEBAxEB/8QAHQAAAAYDAQAAAAAAAAAAAAAAAAECBQcJAwYIBP/EADsQAAEDAwIDBgUCBAQHAAAAAAECAwQABREGIQcSMQgTIkFRYQkUMkKBUnEVF5GhI0OCsRZiY5LB0fD/xAAaAQABBQEAAAAAAAAAAAAAAAADAAECBAUG/8QAJxEAAwACAQMDAwUAAAAAAAAAAAECAxESBCExBRNBMlFhcYGRobH/2gAMAwEAAhEDEQA/ALMKMDNFS0iq5MMClhPrQSPOjpEWCmy5aht1qIEl0Ak4Az705ZHX0qvXtx9pC5aUuMvh/pSc9HuT3OmXIa8JaaKsFAJ6EgHcbjb1qcRyZFvR3tatT2W8Pqiw5qDISObuiRlSf1J8lD3FOtUf6I7Q3FPSk9qRYNSSmXGlc6GudSkkjocE9R1/JByDiu2eHPxLLEq1Qk8R9JzfmFpDbsu3ISUFwDxZSSMHzx71OsLXdC39zuYjNIUmon4edqrglxKKWLFq9mNLVgfKXAfKu5PkAsgE/sTUsNutPoDjSwpKhkEeYoTlryOmIIxRVkUmkEYqI4VChQpxgUKFCkINIrKkUhIrINhTEmw6Z9Rant2nWkGUtKn3s90yFgKXgZJ32AHmTTsTVZXxDe0RepXESXwv0df3GoMCOiNcDFXylbhGVtKUNyBkZGcZFTieTIvbJz46/EG05w3fd0/piBbr1dO7WFOxbgiQ1Hc6AL5BjPtmq1OJHE7UXEvV1x1nqR5Ls24vF1fKnlQnPkkeQplid0llSXEhS158R8qxt2SZLyiMwpZzvhOasdsaJRjdvSWwRm3ZTap8YEdyoBwA7pPkR/T+1PLyZsRhuV8msOq3dSfpeSRkKA/VjcEetFarPdtPOiY/DUppzwutkYCkeY/foQfavezfWnmnLRNQCwgFKVgeNKftUP29Pc+lGxtUtpkMs3jeqR5mLvLU63PS8qW02BlKtnUAeWfux71NfDTtZcU9KRRp/T+prsYalDDDzqVIbOc+FRBKc+xqBWAxCkDvCQkq8WOih6inR+HENydjWdSUrV4mHVbBQI3ScbGpcd+QNMuJ7PfaF0xxvs7jDL7kLUVtQlNwtckpDqP+onH1oP6h+cVLqhVIvC7i5qPhzxAsuqoD7sS5Wp1O4JIfazhbSx9yDuP/AIVdHo7VFv1vpO06utSgYt2iNym/bmG4/ByPxVLNj4Pt4CxW/I5nahSlCk0HeietgoUKFOMZRtSic7UQGd6GMGkI0XjLrJei9ET50eaiG+YzznzCjuw0hBUtwe4GAPdQqjzV9+Xf9QXG9OKUpc6Q48VLVzKIUonJJ3J9atE+JFqm4aZ4PtIt5Sn+LOqtj6s+INr5VED2PIQaqaccBcOT1qxC0tinuyROD+i1671I1bFE90gd4vHXGa61g8FbHaIqBGtrPMBuop3NRv2MNJtsJuGsL4G40FQCG3nVBKeVP1KyfLO1dQTuIPCmPJagydVxIry9kCSlTSV59FKAH5rnvUby5s7mPCOi9P44cSeu7IB1Tw+EkrZbt5PhIACdq5+4gaAmWhxcuOwpIbGVADpVg38Otc9SX4TjEhs/Q4hQWlQ9citQ1zwng3yCtwxuUEKBwMDBFT6Pq7wv8FvqcWPqZ43/ACVzKcJQGnCQE5H7UZlyUlKmxzBO+K23iboSTo2+yY3+WHCU+6fI1qKWcs94VBIzjr1rootZFyk5XNheG3FGws3WPe4Ibdjcs+MQ424kDKsHcK89x/tVuXYVuaLp2Y9KLQ44v5dUuOSs5IKZCzj8ZxVNMNxaJbZaV1VjNW//AA9H2HOzLaI7a+Z2Lcrgy+P0r74nH9CKbM+UAJni+x0ioVjIwazK6ViUKqBRNChQpvAvJmSdqUawhe3Wj5z60RSMcN/FQTJj6C0lOCQqO5cHo6s/ast5Sf6c1VilJJPqTsKuM7fnC+RxK7P1xft0bvrhpl5N4ZSDuptAIeA9+Qk/iqhmoPzd3bhxCp3vFgNnG6iPb8UZPUjwtvSO9dM2jT/D7hjp2dqBKjChRG3THS2SH3sAjIH1YOTj1rU9Qdqnhze32LPqbhPOuMSYru2lONNlSsK5fCgnI3Gw2NdO6QRFd0ramEtJUh2G0tB5fVANNL/B6C5dG7ozFitqQvvEkxkLKTnORkda53HcxTeRN/odA4upXB6I44dt6KhS2JuhHpEeJJUttyGpSk9w6k4U2ts/QpJ2xUpa6YS5pb5Wa45EbkDlLiFYIH7052vQdkZvjS48KMiQ+730hbTKW+8cOAVKwNyQBv1qWNZcOrRqPTxtc6G080tnl5FjwqBTgg/gmhrFWR1csNWWY4zRXW5C7Kbt/fYmS7lcrmwlSpC0NPSm0gAla1dcgDcncACo+4rdnCTaLBI4jcPLlH1BoxaDJ79hWFxUg7pUk74Geo/Nd82Dsx6KtFwXdW9KWlD60FtSm4/IVIIwUnBwQRtW0640rpS2cHNZ2x6x26JDNjnKdbjspbSQGFHJx1Ow361pYeoctKW/zszeowpp71+xTG0oJcHdq6EdKtj+Ggl7+Qlyecf7xDuopJQn9J7prP8Aeql2ARg+29dyfDS4mTtPcUJfDtyepy1aoirdTHySG5bKeYLA8soCkk+e3pWtS3DMh9mizo1iVWWsaqqskY6FChUGSRiSvO9L5q8qFkUl5/lTnNWkgbehm4isG46Ou1nTgm4RHYpHstJSf7GqZOPnDK48CuKQs0SSVpQ01cYTxTuUKUQMjfopKgauQ1LIe7tLiPEgbKA61yf2puA1s4l8P516tjK16it+JzMh4la3kISoGOFfanCioJGBzDJ6mn330DV8a2PnBbUCtQcJ9J6gUwhBk21oqSj6UkbEDPkMVI6b+y1GWpxfRPQmuaux1q1N84Jo08l4fP6Xmuw32ifEGnFFxpRHp4lJ/wBNSbeNS2+0uIduktqKwSApbzgQgH0JO1c51K9vI5On6S+cLZuml7wwstX24XRpt5UlaExcjPKkkbDqTtU1/wDE9qukFtuJc2EyHGT3aFrAUogeQ6muSbnp/R17fYmy50b/AA3O+bdQ9hTaj9ySDsfcVMPD+Bw1sLrV7dfiS7o2nabJe7x1KT5BSjkD2qWBuVxCdThVJWt9vwbTG1XISl2FcWQzIaVyrT7+3tUK9svX7mk+znqZ6EoiReA1aUEHHKl9WFn/ALAofmpIuGotMavvb7lhuEeStrCHFx3AtKvyK5d+IVdy3pPSHDOGXHp13mrusltpBcWiOygoSopTvjmWo/6DR+mTrKpRV6q1OJvWjgKOSroK75+FtoOJJ1XqTXNztfeuQ4Tce2ylHIbUpR70JHkrATv6Z9a50i8JdPTnoqNMpmPsqQhtKVjmlSXcZcWpA2bR12xsAMnerN+x7wef4R8MGrfOQlMqa87JUEj6QpWQM+eBgVvZJ4R3+TnZzLJWpJ4rGvrWSsaqqMOY6FChURDWp7lrwypJwfQUp53A2pplTQMgmrDegbPPcZSXG1INazIiIdYcjFPM26koUg+hGKdpLgUTWFCATnG9RA2VjQ7/AKi7L/aRudsYjLdt0qYIkqKsFKZcNxYKVDP3J5shXqD5E12df7Far9HS67GZmQnwHUpWgKBz7GsPaZ7PUHi5EtN/hvsQrvYpCXBIcT9bPOCpBxuem37164L71hiNMyGi7HQkJVg/3FZfqvBOH8mt6Zkty9fBqP8ALe2QSpcO3RXYy8ZaWpTZSPQKSenpUn8PNM2p6MzGk2+HGZYPKUJKnlrHkCpZOBXkZk2acxzwZTbg2y2SAoe2DW02GbbYTBcLISoe+arTnuV3OgfX5Lxe2x+d09YoF0TNtrMOEHglLy/C0jbYEnYDAplY4ei78cIPEfSi7RcxZra9GeuDjJV/iOpCAw28gqCwlPOojl8JVuSTW56DkRrxPlNyYrbrBZ8KHUBQO4zkHapEYbaYaSxHaQ02gYShCQlIHsBsKv8ARKZn3F5ZznW3WSuD8I05jQsi5TvmrxHtzDefEmMxhSxnoVEAgHzwBW8IQltIQhISlIwAPIUQVR81W6psqTKkBO1YlGlKVSCc1AkFRDrR0XqaXyI1KY4Qk4rX5j55+tPk3dJNM7Flul3fKYjOEZ8TijhI/wDdWKBs8aF8xr2xoT755kI8P6jsK2y26QtkFALo+Ye81rGw/ZPT+te9VoQo7KHoNug9qitAqiiC+I9wucKQ1bHGgiI6O8Q4P8wjYg+49PcVqa0ImRShRGa6J1Loe3aktjttlt/WklDg+ptXkoe4qBLtovUem5q7ZcGsLBy04PoeT6pP/jyrD9U6fJz91d1/hr+m5J4e34a/s1AaZU7L59+7zk1umm7K6stx22yEgjJpFot82YvuVx1oUk4xjrUg6dsL0RQ7xtWwzvWXix7ZrZK7dxys8V22kPw1crjW2R50u6cSbxpm9WcXeEw/ZrrObtzz7eUOQnXTytLI6LQVlKT0I5gd96eocPumuTl5irxH961TibZJF208IEFrmkrmRltj/mS6lQ/2rWw3WJr7Gblicif3JayRsRR81Er6j+9FWoZoZOaKhQpCBSftNGelET4aS8jjfGsjDZ55B70g5A8qcEIQ2kIQkJSOgAwKVQp22/IwW+aWD60mhTCF7eleK72m33uIYVyjJdbO4Pmk+oPka9VDrSfdaY6bT2jVo+kYtsc5W0BaftWRv+adWrWyg83LnanMjyIyKAAHlVZYJn6UHrPdeWeVtltAwEClfIx1uh5bQJSQRn1FejA9KOiTjQN2wUKFCigwUKFCkIJVJWcJo1daJQzgUpHP/9k='
                                }}/>
                            </Col>
                        </Row>
                    </Container>
                    <div className='bg'
                         style={appDivStyle}></div>
                </div>
            </Provider>
        );
    }
}

export default App;
