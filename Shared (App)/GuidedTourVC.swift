//
//  GuidedTourViewController.swift
//  Othent
//
//  Created by 7i7o on 05/07/2023.
//

import SwiftUI

class GuidedTourVC: PlatformViewController {
    var homeURL: String = "https://oth-upload.vercel.app"

    func dismissTour() {
        self.dismiss(animated: true, completion: nil)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        overrideUserInterfaceStyle = .light
        setupViews()
    }

    func setupViews() {

        let gtView = GuidedTourView(dismissAction: dismissTour, homeURL: homeURL)
        let vc = UIHostingController(rootView: gtView)
        let swiftuiView = vc.view!
        swiftuiView.translatesAutoresizingMaskIntoConstraints = false

        addChild(vc)
        view.addSubview(swiftuiView)

        NSLayoutConstraint.activate([
            swiftuiView.topAnchor.constraint(equalTo: view.topAnchor),
            swiftuiView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            swiftuiView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            swiftuiView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
}
