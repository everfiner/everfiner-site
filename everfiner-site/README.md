# EVERFINER website

This is the whole website for everfinerband.com. It's just three kinds of files:

- **index.html**: all the words and links on the site
- **styles.css**: colors, fonts and sizes
- **images/**: every photo the site uses

Phones see the Linktree-style page, and computers see the full page. Both are in `index.html`. The phone part is near the top (look for `PHONE VERSION`), and the desktop part comes after it (look for `DESKTOP VERSION`).

When you save a change in GitHub, Netlify updates the live site by itself within about a minute.

---

## How to edit a file on GitHub

1. Go to the website's repository on github.com.
2. Click the file you want, for example `index.html`.
3. Click the **pencil icon** (✏️) in the top right of the file.
4. Make your change.
5. Click the green **Commit changes…** button, then **Commit changes** again.

Tip: to find something in a long file, click inside the file and press **Cmd+F** (Mac) or **Ctrl+F** (Windows).

---

## Change the bio

1. Open `index.html` and click the pencil.
2. Search for `BIO`. The bio paragraphs come right after that line, and each one starts with `<p>` and ends with `</p>`.
3. Change the words between `<p>` and `</p>`. Leave those tags themselves alone.
4. Commit.

## Change a button link (phone page)

1. Open `index.html`, then search for the button's name, for example `Stage Plot`.
2. Replace the web address inside `href="..."`, keeping the quotation marks.
3. Commit.

The desktop page has its own copy of some links, so search for the name again and change it there too.

## Swap a photo

The easiest way is to **replace the file with a new one that has the exact same name**:

1. Rename your new photo on your computer to match the old one exactly, for example `band-photo.jpg`. A JPG around 1600 pixels wide works best.
2. On GitHub, open the `images` folder.
3. Click **Add file → Upload files**, drag the photo in, and click **Commit changes**. The new file replaces the old one.

| Photo | File name |
|---|---|
| Band photo at the top of the phone page | `images/band-photo.jpg` |
| Big band photo at the top of the desktop page | `images/hero-photo.jpg` |
| Fading live photos (desktop, bottom) | `images/slideshow/live-1.jpg`, `live-2.jpg` |
| Member headshots (desktop "The Band" section) | `images/members/julie.jpg`, `lizzie.jpg`, `savannah.jpg`, `ethan.png`, `michaela.jpg`, `austin.jpg` |

Member photos are shown in circles, so keep the face near the middle-top of the photo.

## Change the YouTube video (desktop)

Search `index.html` for `youtube.com/embed/`. The code right after `/embed/` is the video's ID. You can find a video's ID in its link: in `https://youtu.be/ze0jjVWKsPA`, it's `ze0jjVWKsPA`. Paste in the new ID.

## Upcoming shows

You don't need to edit the site for shows. The show list comes straight from Bandsintown, so just add shows there and the site updates by itself.

## Colors

The main colors are at the top of `styles.css`, next to `--purple`, `--black` and so on. If you change one there, it changes everywhere on the site.

## Newsletter (sign-ups go into a Google Sheet)

People type their email into the "Join the newsletter" box under the first video, and each one is added as a new row in a Google Sheet. This takes a one-time setup of about 5 minutes:

1. While logged into the band's Google account, go to **sheets.new** to make a new spreadsheet. Name it something like **EVERFINER Newsletter**.
2. In the menu, click **Extensions → Apps Script**. A code editor opens in a new tab.
3. Delete everything in the editor. Open the file `newsletter-google-script.js` from this website's folder, copy all of it, and paste it in. Click the **Save** icon.
4. Click the blue **Deploy** button, then **New deployment**.
5. Click the gear icon next to "Select type" and choose **Web app**. Then set:
   - **Execute as:** Me
   - **Who has access:** Anyone
6. Click **Deploy**. Google will ask you to allow access to your sheet. Click **Authorize access** and choose the band's account. If it says "Google hasn't verified this app," click **Advanced → Go to (your project) (unsafe)**. This is safe, because it's your own script.
7. Copy the **Web app URL**. It starts with `https://script.google.com/macros/s/...`.
8. On GitHub, open `index.html`, search for `NEWSLETTER_URL`, and paste the link between the two quote marks, like this:
   `var NEWSLETTER_URL = 'https://script.google.com/macros/s/.../exec';`
9. Commit. Sign-ups now go straight into your sheet. Duplicate emails are skipped automatically.

Until step 8 is done, the box just says "Sign-ups open soon!"
