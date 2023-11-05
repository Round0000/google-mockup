import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'google';

  appsMenuLinks: any = [
    [
      { url: '#', label: 'Profil', icon: 'https://apps.gameshowhub.com/thumb2/TSRbMd2kNWKawh6.jpg' },
      { url: '#', label: 'Recherche', icon: 'https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA' },
      { url: '#', label: 'Gestionnaire de fiches d\'établissement', icon: 'https://www.innovationvisual.com/hubfs/Imported_Blog_Media/gmg-logo-300x300.png' },
      { url: '#', label: 'Maps', icon: 'https://lh3.googleusercontent.com/V0Lu6YzAVaCVcjSJ_4Qb0mR_idw-GApETGbkodvDKTH-rpDvHuD6J84jshR_FvXdl5mJxqbIHVdebYCCbQMJNxIxRaIHYFSq6z7laA' },
      { url: '#', label: 'YouTube', icon: 'https://lh3.googleusercontent.com/3_OFn2skqHXk-UQ-9RUdNrDl_HQJrMCxks5teQcUrF_bOSeDG1hD8j83FeD31W8hASZCvubzsGfumuJq8kvvSAq03wY87RZ7Otx_DF4' },
      { url: '#', label: 'Play', icon: 'https://lh3.googleusercontent.com/BwoectM66uur7vsy6UNtarl_XM67Uu7qUakYNj8nh2OuwczsPmwMSLy0BJ6YpN3IXXCytOJHWeVgXkY4NomrvVMgwLVqLjgsaR7Nng' },
      { url: '#', label: 'Actualités', icon: 'https://lh3.googleusercontent.com/9agKA1CG--ihx80qoPwq8xVFZ0i0_nEyLpXlcf8juPbFXe13GhUBR7Y5xOO3LVfnmM06OtrWw086uFlQ9s5jNPlvXJNBQViCvB4L4Q' },
      { url: '#', label: 'Gmail', icon: 'https://lh3.googleusercontent.com/0rpHlrX8IG77awQMuUZpQ0zGWT7HRYtpncsuRnFo6V3c8Lh2hPjXnEuhDDd-OsLz1vua4ld2rlUYFAaBYk-rZCODmi2eJlwUEVsZgg' },
      { url: '#', label: 'Meet', icon: 'https://lh3.googleusercontent.com/n3Eac1gPc5OTEh7Go1jemICnooceXtfs4VZW-4CPukCUi_doFsN9Q8njidksZ4KIFyPJVYtR7ZhLL16VoUJSPE1j74iTXT2xwCqq' },
      { url: '#', label: 'Chat', icon: 'https://lh3.googleusercontent.com/hK3UrUgS8y0fmfFlxr7hQFdKdkufJQ5aDWjB9Ft2hTLkVUaZTWTH_w5AvXU3C4zko7w1RVLEUQf0DnQ_id9c32IZ6upSLMVfhSWnJg' },
      { url: '#', label: 'Drive', icon: 'https://lh3.googleusercontent.com/rCwHBRBJV4wFiEIN_Mlboj94_TGJxyJtBh-MBFL4y1aZdO4hb7_Uc_PpXRyAoN7O9m_Zc1wSyp3H1vsnb829QE7t9KyGNJY9A1a3QQ' },
    ],
    [
      { url: '#', label: 'Docs', icon: 'https://lh3.googleusercontent.com/1DECuhPQ1y2ppuL6tdEqNSuObIm_PW64w0mNhm3KGafi40acOJkc4nvsZnThoDKTH8gWyxAnipJmvCiszX8R6UAUu1UyXPfF13d7' },
      { url: '#', label: 'Sheets', icon: 'https://lh3.googleusercontent.com/yCF7mTvXRF_EhDf7Kun5_-LMYTbD2IL-stx_D97EzpACfhpGjY_Frx8NZw63rSn2dME0v8-Im49Mh16htvPAGmEOMhiTxDZzo6rB7MY' },
      { url: '#', label: 'Slides', icon: 'https://lh3.googleusercontent.com/kTqndvbnimlnn1xrp-ew5bNI0D1u3JwZTDwvlxzSZEiO7rek5yQBePvWxTq3a1_KYb5Amj34-Y-8Bw81GsekwL7Ayz9CE6dMVN84tI0' },
      { url: '#', label: 'Livres', icon: 'https://lh3.googleusercontent.com/ebfqZ6Jmupx7K805rWoti7Xkfbe5BMU89k2f0INXuK0dh1cYdUneF6Gw5qB1T0P-W0NspIOEE4yhGE590HNFhr_cdpRhON95EyP7' },
      { url: '#', label: 'Keep', icon: 'https://lh3.googleusercontent.com/V6C9KmBzAK48_si_jPMSgUrBhdCGL8-z8QMg-WvDqSdVdPXN-FZHrpCHaZaYAYuXCGK-G85sYRIy3PdqfXAS4QlXwQJTyNUPYCpz' },
      { url: '#', label: 'Jamboard', icon: 'https://cdn-icons-png.flaticon.com/256/2965/2965289.png' },
      { url: '#', label: 'Earth', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Google_Earth_Icon.png' },
      { url: '#', label: 'Forms', icon: 'https://lh3.googleusercontent.com/qT-mnpsMIcop6f82s52RiUSQTfhP5TqbS9eNovaITMbjEIAlIxuW5m3lI2LxLkwox92YIl7rPIzsI0oxUzLPx89KyPabgiLAPeVcjg' },
      { url: '#', label: 'Ads', icon: 'https://lh3.googleusercontent.com/RsEv0ZlVZkwHVxGKH0a8mjDWvqiulD5YX3yX4mnHR4zWawCMB2G_1SNABw5ezxOBuaHn0klco_IPd8XqSzFfMLvdPGgf2mlSoHl9mA' },
      { url: '#', label: 'Chrome Web Store', icon: 'https://lh3.googleusercontent.com/44WILlaqEheSySx8IHZSVfmbo6gBm6tlH5zRz-odfMPZnz3fACu-swj5y1meKYu5e59EQ5a-xmzwvyzsVHRnMTbfVfuzjJ6f58Pg8g' },
      { url: '#', label: 'One', icon: 'https://lh3.googleusercontent.com/0FzUpe1CuQEGq3SzSSNuxBl_OIPzLp-hcKfpD_0opmS0IVjtphsZ74CS5wsrxmLy1X3E_lTsPPUYpSfD1dV_YK_Z2X2XUZuv-4kzSg' },
    ]
  ]

  appsMenuVisible: boolean = false;
}
