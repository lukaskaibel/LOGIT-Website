import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "./components/ContactForm";
import appStoreButton from "./assets/8fe7cfbd7bc7f2e23a4ac0c9482266cb2b5027f8.png";

const appStoreUrl =
  "https://apps.apple.com/us/app/logit-track-your-workouts/id6444813640";
const screenshotBase = `${import.meta.env.BASE_URL}screenshots/en-US`;
const appIcon = `${import.meta.env.BASE_URL}logit-app-icon.png`;

const screenshots = {
  home: `${screenshotBase}/iPhone 17 Pro Max-01_Home.png`,
  muscleGroups: `${screenshotBase}/iPhone 17 Pro Max-02_MuscleGroupBack.png`,
  exerciseDetail: `${screenshotBase}/iPhone 17 Pro Max-03_ExerciseDetail.png`,
  workoutDetail: `${screenshotBase}/iPhone 17 Pro Max-04_WorkoutDetail.png`,
  workoutRecorder: `${screenshotBase}/iPhone 17 Pro Max-05_WorkoutRecorder.png`,
  superDropSet: `${screenshotBase}/iPhone 17 Pro Max-06_SuperDropSet.png`,
  liveActivity: `${screenshotBase}/iPhone 17 Pro Max-07_LiveActivity.png`,
  bodyFat: `${screenshotBase}/iPhone 17 Pro Max-08_BodyFat.png`,
};

type DeviceShotTone = "lime" | "blue" | "teal" | "rose";

const showcaseCards = [
  {
    keyword: "TRAIN",
    title: "Your training at a glance.",
    body: "Weekly goals, overall sets, volume, and muscle focus stay visible the second you open the app.",
    image: screenshots.home,
    alt: "LOGIT summary screen on iPhone",
    tone: "lime" as DeviceShotTone,
  },
  {
    keyword: "RECORD",
    title: "Log sets fast, stay in the zone.",
    body: "Start a session, move through sets quickly, and keep the workout flow uninterrupted.",
    image: screenshots.workoutRecorder,
    alt: "LOGIT workout recorder screen on iPhone",
    tone: "rose" as DeviceShotTone,
  },
  {
    keyword: "BALANCE",
    title: "Balance every muscle group.",
    body: "See where the week is concentrated before your programming drifts out of shape.",
    image: screenshots.muscleGroups,
    alt: "LOGIT muscle group balance screen on iPhone",
    tone: "blue" as DeviceShotTone,
  },
  {
    keyword: "PROGRESS",
    title: "Watch your body transform.",
    body: "Track measurements and training momentum without leaving the same calm interface.",
    image: screenshots.bodyFat,
    alt: "LOGIT body measurement screen on iPhone",
    tone: "teal" as DeviceShotTone,
  },
];

const detailPoints = [
  "Custom exercise library with reusable workout templates.",
  "Per-exercise progress tracking for weight, reps, volume, and set count.",
  "Supersets and dropsets built into the logging flow.",
  "Live Activity support to keep the current workout on the Lock Screen.",
];

const proFeatures = [
  "Charts for weight, reps, volume, and sets over time.",
  "Measurements for body weight, calories, and other metrics.",
  "Scan a Workout to turn a photo into a workout template.",
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand--compact" : ""}`.trim()}>
      <img className="brand__icon" src={appIcon} alt="" aria-hidden="true" />
      <span>LOGIT</span>
    </span>
  );
}

function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      className={`app-store-badge ${className}`.trim()}
      href={appStoreUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Download LOGIT on the App Store"
    >
      <img src={appStoreButton} alt="Download on the App Store" />
    </a>
  );
}

function DeviceShot({
  image,
  alt,
  tone = "lime",
  className = "",
}: {
  image: string;
  alt: string;
  tone?: DeviceShotTone;
  className?: string;
}) {
  return (
    <div className={`device-shot device-shot--${tone} ${className}`.trim()}>
      <div className="device-shot__glow" aria-hidden="true" />
      <div className="device-shot__shell">
        <div className="device-shot__screen">
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar__inner">
          <a href="#top" aria-label="LOGIT home">
            <Brand />
          </a>

          <nav className="topbar__nav" aria-label="Primary">
            <a href="#story">Story</a>
            <a href="#depth">Depth</a>
            <a href="#pro">Pro</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="topbar__link" href={appStoreUrl} target="_blank" rel="noreferrer">
            App Store
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__copy reveal-up">
            <p className="hero__label">Workout Tracker & Fitness Log</p>
            <span className="hero__keyword">LOGIT</span>
            <h1>Full-speed workout logging with a clearer view of progress.</h1>
            <p className="hero__lead">
              Built for lifters who want fast set entry, structured templates,
              and precise progress tracking in one focused iPhone app.
            </p>

            <div className="hero__actions">
              <AppStoreBadge />
              <a className="button button--secondary" href="#story">
                <span>See the screens</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="hero__stage reveal-up" style={{ animationDelay: "140ms" }}>
            <div className="hero__glow hero__glow--lime" />
            <div className="hero__glow hero__glow--blue" />
            <div className="hero__cluster">
              <DeviceShot
                className="hero__device hero__device--primary"
                image={screenshots.home}
                alt="LOGIT summary screen on iPhone"
                tone="lime"
              />
              <DeviceShot
                className="hero__device hero__device--secondary"
                image={screenshots.workoutRecorder}
                alt="LOGIT workout recorder screen on iPhone"
                tone="blue"
              />
            </div>
          </div>
        </section>

        <section className="story" id="story">
          <div className="section-heading reveal-up">
            <p className="section-heading__eyebrow">Core Workflow</p>
            <h2>Designed around the moments that matter during training.</h2>
            <p>
              The product stays fast while keeping weekly balance, exercise detail,
              and session flow easy to read.
            </p>
          </div>

          <div className="story-grid">
            {showcaseCards.map((card, index) => (
              <article
                key={card.keyword}
                className="story-card reveal-up"
                style={{ animationDelay: `${80 + index * 90}ms` }}
              >
                <div className="story-card__copy">
                  <span className="story-card__keyword">{card.keyword}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
                <DeviceShot image={card.image} alt={card.alt} tone={card.tone} />
              </article>
            ))}
          </div>
        </section>

        <section className="depth" id="depth">
          <div className="depth__rail">
            <div className="depth__copy reveal-up">
              <p className="section-heading__eyebrow">Product Depth</p>
              <h2>Built for disciplined sessions, not generic fitness noise.</h2>
              <p>
                LOGIT keeps serious training data readable at a glance, from
                exercise history to live session tracking.
              </p>

              <ul className="detail-list">
                {detailPoints.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="depth__visual reveal-up" style={{ animationDelay: "120ms" }}>
              <div className="poster-stack">
                <figure className="poster-stack__primary">
                  <DeviceShot
                    image={screenshots.exerciseDetail}
                    alt="LOGIT exercise detail screen on iPhone"
                    tone="lime"
                  />
                  <figcaption>
                    <span>TRACK</span>
                    <strong>Know your personal bests.</strong>
                  </figcaption>
                </figure>

                <figure className="poster-stack__secondary">
                  <DeviceShot
                    image={screenshots.liveActivity}
                    alt="LOGIT live activity screen on iPhone"
                    tone="blue"
                  />
                  <figcaption>
                    <span>LIVE</span>
                    <strong>Your workout on the Lock Screen.</strong>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="pro" id="pro">
          <div className="pro__intro reveal-up">
            <p className="section-heading__eyebrow">LOGIT Pro</p>
            <h2>Advanced tracking without changing the rhythm.</h2>
            <p>
              Measurements, charts, and smart template capture extend the same
              logging flow instead of feeling like separate tools.
            </p>
          </div>

          <div className="pro__grid">
            <div className="pro__screens reveal-up" style={{ animationDelay: "100ms" }}>
              <DeviceShot
                image={screenshots.bodyFat}
                alt="LOGIT body metrics screen on iPhone"
                tone="teal"
              />
              <DeviceShot
                image={screenshots.superDropSet}
                alt="LOGIT dropset workout screen on iPhone"
                tone="rose"
              />
            </div>

            <div className="pro__panel reveal-up" style={{ animationDelay: "180ms" }}>
              <span className="pro__kicker">Upgrade without changing pace</span>
              <ul className="pro-list">
                {proFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="button button--primary" href={appStoreUrl} target="_blank" rel="noreferrer">
                <Download size={16} />
                <span>View on the App Store</span>
              </a>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact__copy reveal-up">
            <p className="section-heading__eyebrow">Contact</p>
            <h2>Questions, product feedback, or support requests.</h2>
            <p>
              Reach the LOGIT team directly or open the App Store listing for the
              latest release information.
            </p>

            <div className="contact-links">
              <a href="mailto:logit.fitness@gmail.com" className="contact-link">
                <Mail size={18} />
                <span>logit.fitness@gmail.com</span>
              </a>
              <a href={appStoreUrl} target="_blank" rel="noreferrer" className="contact-link">
                <Download size={18} />
                <span>App Store listing</span>
              </a>
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <ShieldCheck size={18} />
                <span>Terms of Use (EULA)</span>
              </a>
            </div>
          </div>

          <div className="reveal-up" style={{ animationDelay: "120ms" }}>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div>
            <a href="#top">
              <Brand compact />
            </a>
            <p className="footer__copy">
              Focused workout logging, clearer progress, and calmer training data.
            </p>
          </div>
          <AppStoreBadge className="footer__badge" />
        </div>
      </footer>
    </div>
  );
}

export default App;
