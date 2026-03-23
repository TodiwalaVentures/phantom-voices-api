# Deploying PHANTOM VOICES to Hugging Face Spaces

Step-by-step guide to create and deploy the PHANTOM VOICES finder as a Hugging Face Static Space.

## Prerequisites

- A Hugging Face account (free at [huggingface.co](https://huggingface.co))
- The `index.html` and `README.md` files from this directory

## Step 1: Create the Space

1. Go to [huggingface.co/new-space](https://huggingface.co/new-space)
2. Fill in the form:
   - **Owner**: Your username or organization
   - **Space name**: `phantom-voices`
   - **License**: MIT
   - **SDK**: Select **Static**
   - **Visibility**: Public
3. Click **Create Space**

## Step 2: Configure the BASE_URL

Before uploading, edit `index.html` and replace the `BASE_URL` value at the top of the `<script>` section:

```javascript
var BASE_URL = "https://auto-business-agent.replit.app";
```

Replace `auto-business-agent.replit.app` with your actual deployed API domain (e.g., `https://phantom-voices.yourdomain.com`).

## Step 3: Upload Files

### Option A: Via Web Interface

1. In your new Space, click **Files** tab
2. Click **Add file** > **Upload files**
3. Upload both files:
   - `index.html`
   - `README.md`
4. Click **Commit changes**

### Option B: Via Git

```bash
git clone https://huggingface.co/spaces/YOUR_USERNAME/phantom-voices
cd phantom-voices
cp /path/to/distribution/huggingface-space/index.html .
cp /path/to/distribution/huggingface-space/README.md .
git add .
git commit -m "Deploy PHANTOM VOICES finder app"
git push
```

## Step 4: Verify

1. Navigate to `https://huggingface.co/spaces/YOUR_USERNAME/phantom-voices`
2. The app should load and display the PHANTOM VOICES interface
3. Verify:
   - Voice grid loads with all 10 voices
   - Search and language filtering works
   - "Recommend a Voice" section returns results
   - "Add to Your Account" buttons link to ElevenLabs sharing URLs
   - Affiliate links point to `https://try.elevenlabs.io/xz94z17y73rm`

## Step 5: CORS Configuration

The app makes API calls to your deployed backend. If you encounter CORS errors:

1. Ensure your backend allows requests from `huggingface.co` origins
2. The required CORS headers are:
   ```
   Access-Control-Allow-Origin: https://YOUR_USERNAME-phantom-voices.hf.space
   Access-Control-Allow-Methods: GET, POST, OPTIONS
   Access-Control-Allow-Headers: Content-Type
   ```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Voices don't load | Check that `BASE_URL` is set correctly and the API is accessible |
| CORS errors in console | Add the HF Space origin to your backend's CORS allowlist |
| Blank page | Ensure `index.html` is in the root of the Space (not in a subdirectory) |
| README not showing | Ensure the YAML frontmatter has `sdk: static` and is at the very top of `README.md` |
