//
//  GuidedTourView.swift
//  othent
//
//  Created by 7i7o on 10/07/2023.
//  Copyright © 2023 communitylabs. All rights reserved.
//

import SwiftUI

let whiteArrow: String = "arrow-narrow-right"
let blueArrow: String = "arrow-narrow-right-blue"

let backgroundImages: [String] = [
    "bgCircles",
    "bgDots",
    "bgDots",
    "bgDots",
    "bgCircles",
    "bgDots",
    "bgCircles",
    "bgCircles",
]
let titles: [String] = [
    "Experience Arweave on mobile with Othent",
    "Get Started",
    "Get Started",
    "Get Started",
    "Jump In",
    "Get Started",
    "Manage with ease",
    "Upload files"
]
let subtitles: [String] = [
    "Sign in to the Permaweb on the go, all through an extension",
    "Enable Othent Safari extension",
    "Review permissions",
    "Othent uses a popup window to show the sign in page",
    "Interact with your favorite Arweave dApps",
    "Sign up to Othent",
    "View recent activity and an overview of your account, in the easy-to-use extension",
    "Easily upload files from the extension and keep them forever in the Permaweb.",
]

struct GuidedTourScreen: Identifiable {
    let id = UUID()
    let dismissAction: () -> Void
    let homeURL: String
    let currentScreen: Int
    let setCurrentScreen: (Int) -> Void
}

struct GuidedTourScreenView: View {
    let screen: GuidedTourScreen
//    let dismissAction: () -> Void
//    let homeURL: String
//    let currentScreen: Int
//    let setCurrentScreen: (Int) -> Void
    
    var body: some View {
        @Environment(\.openURL) var openURL
        
        GeometryReader { metrics in
            VStack {
                Header(dismissAction: screen.dismissAction)
                    .padding(.top, 20)
                    .padding(.horizontal, 10)
                Title(text: titles[screen.currentScreen])
                SubTitle(text: subtitles[screen.currentScreen])
                ImageView(currentScreen: screen.currentScreen)
                    .frame(maxWidth: 500)
                DotsPagination(total: titles.count, current: screen.currentScreen, action: screen.setCurrentScreen)
                if screen.currentScreen < titles.count - 1 {
                    ActionButton(
                        action:{
                            screen.setCurrentScreen(min(screen.currentScreen + 1, titles.count - 1))
                        },
                        content: {
                            Text("Continue")
                            Image(systemName: "arrow.right")
                        }
                    )
                } else {
                    ActionButton(action:{
                        UserDefaults().set(true, forKey: "guidedTourCompleted")
                        screen.dismissAction()
                        openURL(URL(string: screen.homeURL)!)
                    }, content: {Text("Open Safari")})
                }
            }
//            .frame(maxWidth: 600, maxHeight: 1000, alignment: .center)
            .font(Font.custom("DMSans-regular", size: 18))
            .background(
                VStack {
                    Spacer()
                    Image(backgroundImages[screen.currentScreen])
                        .resizable(resizingMode: .stretch)
                        .aspectRatio(contentMode: .fit)
                }
            )
            .frame(height: metrics.size.height, alignment: .center)
        }
    }
}

struct ImageView: View {
    let currentScreen: Int
    let pageOneTexts: [[String]] = [["Simple","Setup once, use forever."],["Secure","Personal data encrypted end-to-end."],["Seamless","Log in with a single click."]]
    
    var body: some View {
        VStack {
            if currentScreen == 0 {
                Spacer()
                HStack{
                    LazyVGrid(columns: [GridItem(.flexible(minimum:32,maximum:40), alignment: .trailing), GridItem(.flexible(minimum:50,maximum:155), alignment: .leading)], spacing: 20) {
                        ForEach(1..<4) { row in
                            Image("tour1"+row.formatted())
                                .padding(.trailing, 40)
                            VStack(alignment: .leading) {
                                Text(pageOneTexts[row-1][0])
                                    .font(.custom("DMSans-Regular", size: 24))
                                    .multilineTextAlignment(.leading)
                                Text(pageOneTexts[row-1][1])
                                    .font(.custom("DMSans-Regular", size: 14))
                                    .multilineTextAlignment(.leading)
                            }
                            .multilineTextAlignment(.leading)
                        }
                    }
                    .frame(maxWidth: 250)
                    .padding(.leading, 50)
                }
                Spacer()

            } else if currentScreen == 4 {
                VStack{
                    HStack{
                        ForEach(1..<4) { row in
                            Image("tour"+(currentScreen+1).formatted()+row.formatted())
                                .padding(.horizontal, 10)
                                .shadow(color: Color(CGColor(red: 0, green: 0, blue: 0, alpha: 0.2)), radius: 12, x: 2, y: 3)
                        }
                    }
                    Image("tour"+(currentScreen+1).formatted())
                        .resizable(resizingMode: .stretch)
                        .aspectRatio(contentMode: .fit)
                                            .padding(10)
                        .shadow(color: Color(CGColor(red: 0, green: 0, blue: 0, alpha: 0.2)), radius: 12, x: 2, y: 3)
                }
            } else {
                Image("tour"+(currentScreen+1).formatted())
                    .resizable(resizingMode: .stretch)
                    .scaledToFit()
                    .padding(.horizontal, 20)
                    .aspectRatio(contentMode: .fit)
                    .shadow(color: Color(CGColor(red: 0, green: 0, blue: 0, alpha: 0.2)), radius: 12, x: 2, y: 3)
            }
            Spacer()
        }
    }
}


struct GuidedTourScreen_Previews: PreviewProvider {
    
    static var previews: some View {
        GuidedTourScreenView(screen:
            GuidedTourScreen(
                dismissAction: {},
                homeURL: "https://oth-upload.vercel.app",
                currentScreen: 7,
                setCurrentScreen: {_ in }
            )
        )
    }
}
