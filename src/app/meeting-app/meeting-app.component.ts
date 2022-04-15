import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';
import * as jsrsasign from 'jsrsasign';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meeting-app',
  templateUrl: './meeting-app.component.html',
  styleUrls: ['./meeting-app.component.css']
})
export class MeetingAppComponent implements OnInit {

// setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
signatureEndpoint = 'http://localhost:4040'
// This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app


// Join Zoom Meeting
// https://us05web.zoom.us/j/82955333795?pwd=RGNCaXV5Q2tYdzlwVzhTbDFpcldCdz09

// Meeting ID: 829 5533 3795
// Passcode: 595Jgi

sdkKey = 'JUMoQ5LldQp2SliWYUZtXnv2v44eWERxJW7K'
meetingNumber = '82955333795'
role = 0
userName = 'Angular'
userEmail = ''
passWord = '595Jgi'
sercetKey = 'whwEpoaqyFVUsIDYQ15bqKRorturfTKHPyP0'
// pass in the registrant's token if your meeting or webinar requires registration. More info here:
// Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view/meetings#join-registered
// Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view/webinars#join-registered
//registrantToken = ''

client = ZoomMtgEmbedded.createClient();

constructor(public httpClient: HttpClient, @Inject(DOCUMENT) document) {

}

ngOnInit() {

  let meetingSDKElement = document.getElementById('meetingSDKElement');

  this.client.init({
    debug: true,
    zoomAppRoot: meetingSDKElement as HTMLElement,
    language: 'en-US',
    customize: {
      meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
      toolbar: {
        buttons: [
          {
            text: 'Custom Button',
            className: 'CustomButton',
            onClick: () => {
              console.log('custom button');
            }
          }
        ]
      }
    }
  });
}

getSignature() {
  this.httpClient.post(this.signatureEndpoint, {
    meetingNumber: this.meetingNumber,
    role: this.role
  }).toPromise().then((data: any) => {
    if(data.signature) {
      console.log(data.signature)
      this.startMeeting(data.signature)
    } else {
      console.log(data)
    }
  }).catch((error) => {
    console.log(error)
  })

  // const iat = Math.round((new Date().getTime() - 30000) / 1000)
  // const exp = iat + 60 * 60 * 2

  // const oHeader = { alg: 'HS256', typ: 'JWT' }

  // const oPayload = {
  //   sdkKey: this.sdkKey,
  //   mn: this.meetingNumber,
  //   role: this.role,
  //   iat: iat,
  //   exp: exp,
  //   appKey: this.sdkKey,
  //   tokenExp: iat + 60 * 60 * 2
  // }

  // const sHeader = JSON.stringify(oHeader)
  // const sPayload = JSON.stringify(oPayload)
  // const signature = jsrsasign.KJUR.jws.JWS.sign('HS256', sHeader, sPayload, this.sercetKey)

  // this.startMeeting(signature)
}

startMeeting(signature) {

  this.client.join({
    sdkKey: this.sdkKey,
    signature: signature,
    meetingNumber: this.meetingNumber,
    password: this.passWord,
    userName: this.userName,
    userEmail: this.userEmail,
    //tk: this.registrantToken
  })
}

}
