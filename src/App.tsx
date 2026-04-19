import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { ContactForm } from "./components/ContactForm";
import appStoreButton from "./assets/8fe7cfbd7bc7f2e23a4ac0c9482266cb2b5027f8.png";

const appStoreUrl =
  "https://apps.apple.com/us/app/logit-track-your-workouts/id6444813640";
const screenshotBase = `${import.meta.env.BASE_URL}screenshots/en-US`;
const appIcon = `${import.meta.env.BASE_URL}logit-app-icon.png`;
const logitWordmark =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlEAAACWCAYAAAD+Dt37AAAAAXNSR0IArs4c6QAAAHhlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAADYAAAAAQAAANgAAAABAAKgAgAEAAAAAQAAAlGgAwAEAAAAAQAAAJYAAAAAzgvA1AAAAAlwSFlzAAAhOAAAITgBRZYxYAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbiPgogICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAAOypJREFUeAHtXQe4E0XXHqqg0utFBQWpomDviKhUAaWKSFNBRak2LHxYPhGQjypFURAFEcXCjxQRFFRERaRKExERuPQO0vnfd7nJbbnJ7mYm2SRnnuc8SXZnzpzzbrL75szMmWwqwuXCCy8sfOrUqeuyZct2ASTpzJkzSTChFISvlMKQ7JBQJVuoCinnPVsPvtuyDTjZqXcM+rahajL83orXrficDNmKz3+XKlVq4eLFi0/YxEyqCQKCgCAgCAgCgkAIBOw8nEOoCH0axKn86dOnG6NmQ8jNkByhW0kNnQiATB0AsZoJnV/kyZNn5oYNG/br1C+6BAFBQBAQBASBREPAGIm64IILbsCDuykAJXGqmGjAetxfRqTmQaaeOHHi0507d27zuL1iniAgCAgCgoAg4DkEtJOopKSkaxDx6AdP7/Cct2JQIAT+xcGhiE71k+hUIHjkmCAgCgoAgIAh4GgFbkSimL0D0aS48EQLl6ctp3LjK+fLlK3rw4MEZxnuSDgQBQUAQEAQEAY8jEJJEXXzxxQWx1x0J1IUe90XMiwwC1+bPn38HiNSvkelOehEEBAFBQBAQBLyJQKiNfnMcP358EkyXbVu8ef2iYhXygg1DdPL2qHQunQoCgoAgIAgIAh5BICiJQh6oAbCzrkdsFTM8ggCGdnMi9cGUiy66qJxHTBIzBAFBQBAQBASBiCOQ5cRyRBra4UH5XsQtkg5jCYHVR48evWHPnj0HYslosVUQEAQEAUFAENCBQMA5UUikWRrKv4LINi46ULapA7gr7F2njh07pjBkZrNVVKsVy5kzZy7Mj/o6qlZI54KAICAICAKCQBQQyGo47xXYkicK9iRclyAhqlu3buqHH35QixYtUkuWLFE///yzatq0aaxg0SWFdMeKvWKnICAICAKCgCCgBYFMkagSJUpURT6oUdCe5VCflp7jRAnyZ6lixYopkiFMwncUQSpdurSaMGGCRZgKFSrkRwSJLVW9evVUrly51IIFC/zHPfqG86OKIhHn5x61T8wSBAQBQUAQEASMIJCJKCGq8H/oqaGR3uJEKYimatmypapfv766/PLL/V7t379fDRo0SL333nvq5Mng+SjPPfdcNXPmTHXppZf62wd6M3z4cNWvH7cp9HQ5jcnmV23ZsmWZp60U4wQBQUAQEAQEAY0IpItEgUDdAt2ef2Jr9N+xqrp166oPP/xQ3XnnnYpkKm3JkyePuv32260o0uzZsxWiM2lPp3v/2muvqZo1a6Y7FujD9ddfr7BXoTXcF+i8R46RjJfF3KgJHrFHzBAEBAFBQBAQBIwjkC4SBRL1A3q82XivMdgB9gxUr7zyimrfvr0t6zdu3KiaNWumkpOTM9VH1m+1fPlylTt37kznsjowcuRIReLl8VIb28LIJHOPXyQxTxAQBAQBQUAPAv6J5SnJE4VAZYFrjx49bBMoqkCmd/Xpp58qENNMGmvUqOGIQFFB586dVe/evTPp8h0gMWMkLMrl8Sj3L90LAoKAICAICAIRQ8BPojA5uEnEeo2xjm666SZrBZ1Ts8uUKaOmTJmiQFDTNeXwnJvy6KOPqj59+mRqWqtWLWtF38qVK1WdOnUynY/ggdogjedGsD/pShAQBAQBQUAQiBoCfhIFC2QyeYDLwBVyb775psKKxQBnQx/yEakLL0zdenDz5s2hG2ZRo1OnTuqll15Kdapp55SBQoUsHJMvf3224rztqJU8qLf2lHqW7oVBAQBQUAQEAQiioDFDBApqYZey0S05xjp7Lbbbss0gdyp6UxlwIgUtkmxmv7yyy9q/vz5TtX463fs2FG9/PLL/s/LlqUuimOqhbfeestaOeivENk3jSPbnfQmCCiFSHp2SDFIlRQpitd0cz4Fp8gjgGuQH3IppBqkDOT8yFshPQoC5hCwbjIgUb3x5X7FXDexq3nIkCGqefPmWhxgBIqTzf/55x9VvHhxi1iVK1fOte6xY8da86QYLSNxSjuUxxQLnEc1ffp01/pdNtyFyeUl0faUy/bSTBBIhwDuTVxFfD3kMkjxLKQIjqdbbYzPzDOyG7IdsiOArMCxX5GeIya2B4Ctniq4LpfAIK7oToL4rkuxDO8DzV04hjp7ILw2vldeo0WQH3A91uFViiAQEwhYJArzWPjlvSYmLI6wkT/99JM/gqSjaxIpkrJNmzZZROqTTz4JmSsqWL/jxo1TL774opXsk0Qq7VBetIgUtqypuW3btvnB7PbqOTwYmsE2nQssJuKh8KtX/fWqXbgOXJHBcWnKXZCCEBNlF5RyReksCq4VyZaUAAjgmnC+Y02I77qUD1BNxyFegwUQrhan/IbrQkLs2QJsusG4izUa+AZ83mpHH/ruiHpV7NSVOuoL4Kr12ZQNQ0ylTp06xUk6FqESkNMjwGG3UAkx07cI/QlJKS0i9ffff1tE6uOPP1bly7u/H40fP1698MILimkYRo0alW4oj0TqiSeeUNOmTQttmKYa+FEPQmqHJzWpi6ga2D4aHT6isdN2+NG+r1FfXKoC7rngGMkrH9D1IFdAIl3OoMMlkJkQkqqFuHYJHVHFdWH0z0eabsX7QJElHDZajkD7l5ARuB7fGe3JpXLgtBBNb3DZPFCz6vA1dZ5GoBopx9D3DLzlb0ZKaAR6AtfBoavZr5EdD1leeCFQWWCGBJJZnHF/mKv1OEeKk8537NhhEap169xHsNu1a6f69u2rQIbVY489lm4Ij3OkRowYoRo1auTeYOctKzlvIi0SEQE8AEpBRsJ3Du18C3kWEg0ChW6t++BVeH0B8j1kF2wbCuFQVcIU+JsD8hDkTzi9EjIQcickGgQK3SpGwFpA5sOm5ZBHIefxhBRBINoIZAcry5zIKNpWeaj/77/nvVR/Yf4o5pFiPqmdO3daRGrt2rWuO2rbtq16/fXXLSKVcS4UI1RcYXjPPfe41u+koXynnKCVmHXxECwMGQDv10Meg+TzIBIcQuwK+RO2vgop4EEbtZkE/7JBWkLhKsg7kLLalOtTdDlUjYJsha3DIBX1qRZNgoBzBLiihZMCpWSBAMnH9u2c86i/JCUl+YnUrl27VIsWLdSaNWtcd9SmTRvVv39/P5FKO4RHIjVs2DB17733utbvoKEQcwdgJVJV3G/Oh7wInzdAnobkjQH/uaLMshm2Pw2JBZsdwQqf6qPBb5CPIBUcNY5O5fzotgtkFWxntFAiU9G5Dgnfq0SiQnwFDh8+rJ5++umQGwqHUJPl6ZIlS6rPPvtMlS1bVukgUq1bt1YDBgywiNTjjz+upk6d6u+bRGro0KGqadOm/mOG3nCFTk5DukVtDCKAh9w5EE6+5RDRq5BYjOoUht2Mnv0BXzpBYv47Dh9uhTDczmW81SGxVrLDYEYLf4cfnLslRRCIKAL8AkokKgTkc+fOVcwWzknaJgo3MuYcKRKp3bt3W0N7q1evdt3V/fffrwYOHMjcOapLly7qiy++8OsikWLaBqZaMFiyYbhSvlcGAY4l1XxQw16OVQ+BxMP8ogvgx1sQRkGuxWvMFdidFzIJhnOi9i0x50Bmg5nncCZ8mgApmvm0HBEEzCAgJMomrjNnzlSPPPKIUSLFOVLMG7Vnzx5raG/VKk5NcFfuu+8+P5Hq2rWrFe3yaWL29cGDBxslUuhDhvR8gCfwKx5obeD+HEg8JvPlktp58DGmtsyCvSVpN+Q+SLyV1nBoNXxsHm+OiT/eREBIlIPrMmvWLMVs4SdOnHDQyn5VXwJOplTwEanff//dvoIMNVu2bKkGDRpkRaS6d+9uzb/yVTFNpLBSUEiUD+wEfMVDjJOUX4Hr70NyxzEEXDk2Bb4+Ews+wk5OzP4Zcl0s2OvSRkaiJsPXHi7bSzNBwDYCnFheyHZtqahmz54dESLFvFF79+61IlLcWNhtYWJPRp1wnRWJFIcNfYVEivmlTBTo9uJqKxOuis4MCOC7xqXwH0J6ZzgVrx+ZIqY//B4D8ew8KdhWD3YugJSO1wuRxi9ek0Hw+b9pjslbQUA7ApxYLjmiHML69ddfq4cffthYRKpYsWIW2alQoYLat2+fYkRpxYoVDq1Mrc75T5wHxdKjRw/FLOm+snTpUt9beRUEwkYAD61iUPINJB6HikLh8zAqzAIGBUNVjPR52PQ4+pwGSbQ/Ny/A9zch8pyL9JcuQfrjcJ4UFwjMmTNHPfTQQ+r48eMuWoduUrRoUYvsVKxY0U+kli9fHrphFjW4Io8r88iZe/bsqXr16mWt4uN8KSmCgA4E8KCqDD0/QW7SoS9GddwBu38EFpd4wX6SB8hQ2PImJIcXbIqCDSSQHwAHz0YJo4CJdKkJASFRYQDJVXuRIFKVKlVS+/fvtyJSy5Ytc21xkyZNrFxRJFIffPCBRapMZGR3baA0jFkE8IDiqru5kLIx64Q+w0kmvwUmXpgq0RO2yD8lpTjhfJy+SyyaBIGzCAiJCvOb8M0336gOHTqoY8eOhakpcPMiRYpYEanKlSurAwcOWEQqnCE4Zi0fPny4tc9e4B7lqCDgDAGQBd5HJkIkrUUqdFyNGNWHNq7LDbDh9VSTEv7dA8DkwYRHQQDQioCQKA1wzps3zyiRKly4sOImxSRSjBwxfUE4RKpx48bWfnrcV0+KIKABAWbzvlODnnhT0RgP7e7RcAr9MgrG7OPc2FlKKgLDgU2V1I/yThAIDwEhUeHh5289f/581b59e3X06FH/MZ1vSKQ4IbxKlSp+IvXbb7+57qJhw4ZCpFyjJw19COCBdDve9/F9jtLrGfS7C8JJg7MgX0G4EmM3JNplADCKRjoBRsHKRNn5A+h/LWQ+5AsIFxzwpsUtf45AolGYkoLpD/JGo3PpM/4QkFCExmv63XffWUTqvffeU3ny5NGo+ayqQoUKWUSKq/WY9oCZySdOnKiuvvpqV33dfffd1kRzblhsKhu7K8OkUUwggAdRCRjKVAaR/jP2J/rkEtMZkE2QZMzzC7jCAzYy3QJzlpFQ3A1plvIeLxEpjATxoX0lbNwXiR7RF6NfjSPRV5o+SGKnQkiWVkG2wd8siRJs5HemEoQZ36+BNIJEKvVCVfQ1BPIIJB7KFjixPkKO8Pusk5zzd8vfcKTKXt0dcXuOk1CaqKs2dONp6bv55pvV+PHjVd68Zv7sMO0Bh/SY9uD888+3iNQ11/A+5K7MmDFDPfbYY1qJFG6g7bZs2fK+O4ui1wo399HoXefNtR2wiDkcQl2BlIfgbNTjarRIlI3oZDLkY+DpPgQLBbD9erwwo3ULyEWQSJTPYXcT0x3BN5KSBRA+7EyXneiAQ4afQb6Hf6fcdgi7mYKAUc22EF4XMzdPKE5T7oHNJH5hF9i/EEo4B01XqQ7blulSpksP/KwAXYwu6irL4Gd1XcqioYfJNs9Eo+N47nPBggWqbdu26t9//zXiZsGCBdXkyZPVFVdcoQ4dOqS46fCiRYtc91W/fn01evRoJXOkXEOYiA17w+lIEKjD6OcpSHncbHtBwiJQvFDQ8TOEOstBmG3WzA8VitOUe3Gr5QbMxgr054dyEk3TBIpkaQSkAnDsCpkHcU2goIfX5AzkG0h7fKwIYYTT9LPpNWBG8iZFEHCNQHbXLaVhUAR+/PFH1aZNG2NEqkCBAuqjjz5S1apV8xOpX375JahNwU7Wq1dPvf322zqJlNycggEew+fw4CkL80miTBdGCSrjwfo/CCPmWgt0noD0hVIO73AelenCrOYlDXbSBbovMaifqn+GXAvcnoDsM9EX9P4DYUqCGyE6ox4Zzb0MB+7JeFA+CwJOEBAS5QQth3UXLlxoEakjR7KcGuBQY/rqPiJVvXp1dfjwYfXAAw+on3/mPc5dqVOnjhozZoxOIuXOEGnldQSehIEmpwDsgX4OtVD+MQ0G+tgAqYt+7oNwMrSpcg4UG4lGgZxRN0mUqcKoUA/IjcBqialO0upFP7yZceh1Rtrjmt+b2fdKs5GizrsICIkyfG1IpEhuSHJMlPz581sRqbRE6qeffnLdVe3atVWnTp1ct5eG8Y0AHtbF4GEHg16SQN2JB6iWuSpO7ESfHAqrAzFJpB4Dhia2XmkHu0s48ddBXRKojsBnCMT0EFs6s9DffhxoCBma7oS+D1fjepBASxEEXCEgJMoVbM4aMTpkkkjly5fPIlJXXnmlYtSLw4gkb25Lt27dOEfBbXNpF98IdIV7eQ256CNQEYl0BPIB33v+A+FD1RSRKgDdjwTq2+0xkADexxkdNFFOQ+lDwOVdE8rt6ETfpyHdUXeCnfou6kg0ygVo0uQsAkKiIvRN4HwlTgDnRHAThURq0qRJ6qqrrvITKc7LclO44u+8885z01TaxDECeFjzS9HZkItRJ1A+v/DA5j8QEqmDvmOaX7sDy9wadXJeTwWN+nyqfARqnO9AlF8fQv/fGrDhFlwPnSvrDJgoKr2KgJCoCF4ZrqCLBJFiugOuDGREiisFnRZuqnzqVFiLbZx2KfVjA4GOMLOwAVP5ZasP8hK1CFRGn1KIVGMcNzF8dQH0cuK0rvKMLkUZ9HD47r0Mx6L2EbYwpxDTH+w2YASHDKUIAo4REBLlGLLwGvz6669WkkxTG//68kZde+21VvZ0plr44YcfHBnNpKGm0jM4MkQqewYB/FPnsvmehgwajAek+xURhoyCTYx6vGVI/TPANOwxc+i4FfZx8rXushEK/6Nbabj6cE2Y1NMEaawdrm3SPjEREBJl6LrfeOON6t1331Xcpy5j0s3FixdHhEhdd911FpFq166dIjGyU3BTtlId2KkrdRIKgVbw9iIDHv8JnZ57WKfx81m835rms663laCokQZlJggFzeoMwmJmNUz4TnN48fvw1aTTcBXufSairOk6kQ/xh4CQKAPXlATqgw8+UHXr1lUjR45Uy5cvV0OHDlVJSUn+3rjvXatWrax98PwHNb7hnKYJEyao66+/3iJS3NeP+/uFKm+++aarIcBQeuV8zCPACeUmSic8rP81oViHTtjGCeam5oF1C8dGPPSLo32DcHRk0XYS/J6ZxbmoH4ZtHGLtrdkQPgvv1KxT1CUAAtlTvpAJ4GpkXPQRqLTRp3PPPVc1a9ZMff311+rOO1N/p0uWLLG2bzlwgPdp/cVHpG644QZ17Ngx1aFDBzVv3ryAHZ0+fVoNGzZMvfHGGwHPy8HERQAP6yLw/ioDCIzD/ecbA3q1qoSNTLfwqValZ5VxQjM3xHVbbkPDsIcEM3TO6BNXwnm64JrwH+EKzUbKkJ5mQBNBnUSiNF5l7pnH6E9aApVWPTcQ5p56L7/8sj+h5dKlS40SKRI4RsVI7kikGJHq27evPwLGuU8zZ85ULVq0UP3799c5oVz3zT0tlPI+sgiYeFhz5ddLkXUjrN50Rz5oDOeZ3RSGVTXCaJtV0ykgKDuyOumx48M123OXZn2iLgEQyJkAPkbExVtuucUiSHny5AnZ38MPP6wY+SGZYlm2bJlq2bKlleuJWch1Fx+R4iRzpj0YMWKEJbSVdnA1nhRBIAgCNYOcc3vqKzysN7ltHOl2sHU1okYL0O/NmvsmQZ3jUifb6i7v6lZoUN9E6H4aoisfS05c4yRc62SDNovqOENAIlEaLigJ1Pvvv6/sEChfd8wKftddqX98OG+KRGr/fibo1V8YHaONjJb5ytGjR4VA+cCQ12AI1Ax20uW5MS7bRbPZ2wY6r+lGZ8oQK/f801nWgUDonrCt0750umDrEQg3Qb5AowiBSoeyfAiFgJCoUAiFOH/rrbda5OScc84JUTPz6SFDhqhSpUr5T6xYscIaVtu3b5//mM43PiJF0idFELCDgKGHNR9U0+z077E6n8Ae3T/O64Cxmwzwt8IW3UPm4zyGt5gjCHgeASFRYVyi2267zRrCc0Og2G3BggXVM8+kX6G8cuVKi0jt3bs3DMuybspoGedl1ahhYjpF1v3KmZhFgF8U7Q9rRA5OxhoisJmrCDmEpLPkhrIbXSjUPZR3CjaMd2GHNBEEEhoBIVEuLz8J1HvvvafcEihft/Xq1cs0Ef333383TqRoO32QIgiEQKBmiPNuTsfyw/o9Nw6HaFMzxPlAp3X/eJeCJMpQViCk5ZggEAQBIVFBwMnqVM2aNS0ClTs3/0SGV5hhPO3cKJ+2VatWqebNm6s9e7ilmP5C8jdu3DhFX6QIAkEQqBnknJtTO/GwXuemoUfaLIEdRzTb4ogQYfiPq0+qabbhV836RJ0gkBAICIlyeJlvv/12i3zoIFC+ruvXr+97m+519erVFpHasWNH+hOaPnFDZCmCQBoEdD+s1+NhbSZ3RxqjTb+FD3+jD90/QieEVfd1kSiU6S+N6I9bBIREBbm0XDVHApUzp77dcbZu3eqKQPnM/OOPP6zNjE0QKfrJLWKkCAIpCOh+WG+OI2T/0eyLE6yd1LVjZswTWztOSh1BwAQCQqKyQLV27drqnXfe0UqgtmzZYhGgv//mH1n35c8//zRGpPLly+feMGkZbwg4iY7Y8T2eHta6fXFCjJzUtXNdzOw1ZadnqSMIxDgCQqICXMA6deqoMWPG+Dfn1bFBry4C5TOXRIqT0rm6T1dhKgVTk9d12Sh6IoqA7oe1buIRUTAydKZ7+xcnhFX3ddHtSwao5KMgEL8I6BunihOMmEF89OjR6SJQp06dUgcPHlRMjIn5EI493bx5szWXadOmTY7bBmvAVX0kUlOmTFElS5YMVtXWuVmzZin6KkUQSEFAHtZZfxV0E0InWDupm7UHqWciQqKw2CQ/uqyd2q1n303Fff6EZ60TwzyFgHESVbx4cUViwoSSxYoVU4cOHbJWmI0aNUr9+qu38rvRRtqVcQ5Ujhw5FIe5Tpw4oY4ePWq9t3sV//nnH4tA8dVE4eo+H5FKSkoKq4tp06aF1V4axx0CTqIjdpzXTTzs9Gmqjm5fbGENIsJ7dgHNTkVqOK8M7OYmzl4vJKlmtorwuodin2MEjJEoJnH8z3/+o9q1a6eyZ888ali3bl31+eefq169elnEyrHlmhs0aNBAjRw5MhOBStsNV+jRFw7v2Um4SeLUrFkzxUiUycJVfj4iVapUKVddTZ06VX3//feu2kqjuEVAd8RDN/GIJvC6ozd2sTaRzE23L9G8LtK3IBBRBDKzGw3dX3rppWr69OmqQ4cOAQmUr4t7771Xffjhh44iO762Ol9JoAJFoAL1wagU/g0qJsoMVjh0R2JjmkD5bOBkdRI2zr1yWthWZ44op/1Lfe8hgO847w0FNVsWTw9r3YTQLokqpPmaUN1hAzpFpSCQEAjwRqk1Y3np0qXVl19+qapUqWILwKuvvlpNmjQpakTq7rvvtggUyZHdws17Wf/IkcD7kIZDaOzaEKier18nxI3JOzt16mQiGuh88lggp+RYtBDQel9IcUK+E1lfTbt4B77pZK3XzhlZkmsHJakjCARAQGskinOJGNFxukz+yiuvVB999JHjdgH8cXSoYcOG1hCeEwLl64DzuwJNMvcRGTcRIZ/ucF4ZAWNEys4crPnz5yvmwlq5cmU4XUrbOEQA320+1HVHW3RHtqKJvO6I0G6bzpiYqxNP18UmjFJNENCDgFYSxflN1atXd2UZ25FI5c/PBRzmS6NGjdSIESOsiJLb3jg/au/e1OcMCRSH8JhQM5qFBIppGpgo9OTJzLs5kDS98MILqnXr1sa2kYmm/9K3NgTsPtjtdqibeNjt10Q93b7YwhrklkNvxzQ7JCRKM6CiLnEQ0DaxPG/evNYk8nCg8xGp++67Tx04cCAcVUHbNm7cWHHD3UAT3oM2zHCSw3rMHF6oUCHFyd2MAHFLFy+U/fv3WxP7x40bpy677DIryseI23fffad0p1rwgr9igxEEdkFrBY2a4+lhrdsXYm23kHC5W0ESuAfdvgTuRY4KAnGIgDYSVatWLS1bhlSrVk1NnjxZkUiRCOgunMw+bNiwsAmUzy4SKKYZIIEKNdnc1yaSr7TN7ibHkbRL+ooJBGxFRxx4ojt646Br7VV1++IEaw7pCYnSfklFoSDgHAFtw3ncJkVXueKKKywiVbCg3j9ITZo00Uqg6C8nZnuVQOm6HqInYRFw8mC3A5LeH7SdHs3V0e2LE6yd1LWDgG5CaKdPqSMIxAUC2khUnjx5tAJy+eWXayVSnKs0dOhQbREoOuvLGO7FCJTWiyHKEhUBeVhnfeV1Ew8nWDupm7UHqWd0E8JUzfJOEIhzBLSRKG6LortUrVpVffzxx9aco3B0M1I0ZMgQrQTKxN514fgobQUBAwg4madjp/vSdirFSJ0ymu10grVuElVJsy+xru50rDsg9kcOAW0kihOrTRROiv7kk09U4cLuEvWaIFDr16+3hvA4qVyKIBDHCOh+WJdDEk+7SSU9Cyt8KAvjbG3T4sAJJ1jrTnNQHT7lcmBrPFclgTK3qimekUtQ30ii7CZ5CwrR2LFjjU2srly5shWRckqkmjdvbkWgAuVzCupMkJN//PGHtReeEKggIMmpeEHAyYPdrs/X2a3o4XrXGrDNCdZO6tox9RxUusJOxQSoswfPC4lEJcCF1uWitkgUs3e/9NJLuuzKpIdEihGpIkXs/ZFt2bKlGjx4cMCEmJmU2zwgBMomUGerSXZqR3B5srKTISa7DsQDiTLhgxOsd9oF20E9Ez456N4zVZ1cB88YLYZEDwFtKQ7owrRp01SJEiXUyy+/bMSjSpUqWUSqRYsWdateurL/rTI8wcOBArQRq3bp1iv1yNZ4UQSBBEFgOP/mvXNufLeiKh4e1bh+OApc1ELtlid2KDuoxujbKQX03Vbej0StuGoZoUw3nG4eoY/d01g8WuxqkXkIhoJVEEbl33nlHnT59Wr366qtGgKxYsaKfSAUiNBy669mzp1YCtXbtWotABSNuRpwVpYJAFBHAb2kf5sqQSFXXaIZuAqLRtNCqgAc32bwqdE1HNX4G1k6ykK+Adm6VoHOFoIkhynQgwEdOIu2T7qCGD7gmj0GNLhIl/5I1XJNEUqHzH6YfN86PevHFF/2fdb+pUKGCRaS4f13Ggh+Umjp1asbDrj+vWbNGCJRr9KRhHCAwT7MPRfEbjeXVYFcDj3M1Y+IIY5ARRgcXaLahCq5Lcc06I6XuAo0dSSRKI5iJoMoIiSJw3G7k+eefVyQ1Jkr58uUtIlW8eObf/aeffqqlSyFQWmAUJbGNwHwD5rczoDNSKjsY6MgNxt9ptoPPgraadUZK3aUaOxISpRHMRFBljEQRvPHjxxsnUlOmTFEZiRTJz6pVq8K6fj4CtXu37oUwYZkljQWBSCPAh7Xuf0Lt8edK+1QC08DAZkagWmnuh8N4P7nQqZtE0YSHXNjhhSZCorxwFRLUBqMkipi+//77qlevXsYiUuXKlVOMPHFCe9ryzDPPqJMnT6Y9ZPv96tWrrTQGQqBsQyYV4xQBDB0xJxHn4OgsJaGsoU6FEdLVHP0U0NzXL8D4Xxc6F6PNYRftgjWpBKJ4S7AKHj1XTqNdMidKI5iJoMo4iSKIEyZMUM8++6wxIlW2bFnFiFRaIrVkyRLVt29fx9eQESzml9qzR3c+O8emSANBwCsIuBluCmV7x1AVPHj+YQM2ucIWxIv/EBcasMeEjwbMPKsSpK8y3unctobkVIogYBsB7SQqV65cqlatWqpr167qwQcfVJdccollzMSJExWjQ/jS2zbOSUUSKUakSpbkn9yzZcyYMWru3Lm+jyFff//9d2sS+d69XPgiRRAQBFIQcPWgD4FeHdwLSoeo45nTsLUijDERpQkHWxNDes3hq+5om8nrqHN4NRnkNLx5ICY9Fd2eRIAkShurYQRn+fLl6oMPPrAiT0xz8O2336qnnnrKcv7DDz+03psiUiRsJFJJSUlWf0y18Nhjj1kT0EOhv3LlSsUEnUKgQiEl5xMQAT7otd0nUvDjveeVGMKynwFbT0Dnj2HoNUGiOO/rhTBsinRTnSTqm0gbL/3FPgK8kWkpb7zxhrXFSv78+dPpY2SqR48e6r///a91/KOPPlJPPvmklUsqXUVNHy6++GKLSJUqVcrSePjwYdW9e3fVrVs3xazqgcqKFSuEQAUCJrxj2cJrLq29ggD+nXPF0m8G7GmHP1R3GtCrVSVsvBcK79Gq9KyyH4Bt4JuSvc5+RjUT+7z1hM9X2jMherVgI3NbXarRAvvDFho7FVWxjYAWEsVhu/vvvz8oEh06dLDmKOGmoSZPnmwlxGSkyEQpU6aMNUfqggtS04dwzlTt2rUVSdzBgwf93TJyxgzn+/bt8x+TN4KAIJAJgaGZjug5MBoPw7x6VOnXAtv4r3C4fs2WxiHh6MW9lJnO3wlHRxZtmVD0HfjOVy8X3ZFMIVFevtoetS1sEsXJ3L1797blXrt27fxEivvgMUJlmkhdeOGFftv++usvKwpWrVo11bFjR2vloBAoPzzyRhAIhsAknNwUrILLc1xZ9bLLtpFoxtUpqf/G9PW4GqqmaVBHIsZJ5roLs7J3161Ulz4QPEYH6+rSBz3rQUpNfL81miiqvIhA2CSqQYMGKnfu3LZ9a9u2rXr99detbVkYHeJQmykiVbp0aSsiddFFF6Wz79ixY2rGjBnqueeeU/v37093Tj4IAoJAZgTwgOGDOqzISWat/iMcPrre/8kjb2DTbTCFW4qYKAOBadjzzKDjHxg32YSB0PkKMOCEek8V2MR5W7q/ixKF8tRVjh1jwiZR117LYWlnpU2bNqpfv34WkeJEcM5XOnXqlDMlNmuTQJGsZSRSNptLNUFAEEhFYAzemli6ymGjGXg4emYeDmy5ETYxUhT2PRI6MpatODAh48EwPg8Mo22wpiQrc4GFznlHwfoLeQ62cK7lSIjulZ1CokKiLxUCIRD2DeLoUQ7LOy8PPPCAGjBggEWkPvvsMyslgikixSE9kjVGpqQIAoKAOwQQ9TiElnyAmSiFoXQOHpLVTSh3ohM2MCo2C5LPSTsHdYcAy+MO6getCl1LUWFO0EruT3Ioc56HiBQjUO3cuxOw5W4cnRnwjBwUBEIgEDaJ+vlnLhBxVzgZfeDAgSp79uzqiy++UF26dDEWkeIkc0akOOlciiAgCLhGYBhauvvnFLpLH5GqFrqqmRogC9dA81eQ9MuM9XXH+QNv6VPn12QqGsUOPEGkcG04d66r32N9bwal/EHQp1E0JQwCYZOojz/+WP32m/vVz5zY7SNSU6dOVY8//rjr7VpCXTUhUqEQkvOCQHAE8LDZgRrjg9cK62wRtOYQUuOwtLhojD7vQ7OvISaTTb4FDA+4MC9oE+gk8VsRtFJ4J31E6o7w1DhvjeuSH8Lv3H+ctw7ZgsPTw0PWkgqCQBYIhE2iOCmck8WZ7dttYZLLQYMGWRGpadOmGSVSzB/FoT3mk5IiCAgCrhBg1MPMJMaz5pBIfYEHJ+UiVxY6aIQ+LoZwOIcrEAs6aOq06jE04HCUqWIyGkWbSaQ45DoRUsKUE2n1op9b8HkZpG3a4xrfc2j1oEZ9oirBECCJCnuFCLN8t2jRQjHrt9vCbOeDBw+2iNSXX36pOnfubCwixYzmJFK+LWnc2iztBIFERAAPnfXw+9UI+M5o1Co8SLl6j5PPtRbozAl5Fkr5D1Dncvms7OwF7JKzOqnh+ETomK9BTygVTAq4Ftg9Dgn7j3igzqC3MmQMztGfiwPV0XCMQ6tDNegRFQmMgLYfAJNVkkgx+7fb0qxZMyvrOedITZ8+3dqy5eRJrqzWX7jHHokU99yToh8B3ACz6dcqGj2EAEnUNxGw53z08T/IH/hO9YNcHW6f0HE9hDo3QLidC1ehmS5TQaBMRqG4SIfRQRKcXaadgX4Oeb4JWQMsX4NcGW6f0JENcgdkBnSR2D4M0faMCmDfMGBGIiVFEHCNQDYMbx1Ga203kQIFClhZwa+44grXRnG1HvNHcbVevXr11OjRo1XOnDld6wvWcPv27YpRsD///DNYNTnnEAHcCDslJyfzn2RMFdg9GgY/otHo7dAVC8MF1+GBwvkhtguwKonKSyERGdpJYxh/rFMg0yF/Q7bC9oD/tmBjLpznMBRXlDSANIdcDIlkoY1XOsXXrYHwuR7aEptI/5Hhdfk0pe9NeOWGvhzCDFhgJ6OL1SE1ILdBOHRXBBKJwt9kGV3XBL4shL4bNBpeHbYt06hPiyr4WQGK1mpRdlbJMvjJ70DMFu0kikhw/zxur8LM4G4LV+t17drVIlJ16tRRb7/9tjEitWPHDotIrV/PUQopOhDAj01IlA4gI6ejGG5mjiMYuM53wMTZEJMRg1AonEYFTnjfDNkCIXm4EELyVDzlM16iUk6g11uBrftlzC7MxnUZgGZPu2iqu8keKOQQJnNjkVAVhZAoUQpCovW96YxrMgr9aynAW0iUOyRjnkQZ+QIfOHDA2tB36VL+SXVX7rnnHjV8+HCVI0cO9dVXX1nbtJw4wfuR/lK8eHHFbWjKly+vX7loFATiGAE8iObCvdei7CLvY4yKMT0B51E1glwFYYQs0tEYdJmuPBdpApXS+/N45YM92oVpKy6D3AW5G8JoDW+0PG7k+QO9oco7OglUqM7kfHwjYOxLzE1+mb5gyZIlrhFs3LixGjFihBWBmj17thAp10hKQ0HAKAIvQfs8oz3EpvJpeFhz7lXEC/rl8GYriKMh2ogbGvkOSSwfj3y30mO8ImCMRBEwEqlWrVqFlUeqYcOGfiL19ddfq4ceekgdP37cyPUoVqyYlZCzYsWKRvSLUkEgHhHAA5vDaZzQzCE1KWcR2ISX9tEEA9eFc7EeiqYNHuubQ4pNgYuZB4jHnBVzIoOAURLFVXYkUsxMvnjxYtce3X333WrkyJFWRGru3LlGiVTRokUVE4hWqlTJtb3SUBBINATwYEqGz7dDNiaa7wH85cTbWsCE84GiWmDD5zDgUQgjU4lcOB+rScr3NJFxEN81I2CEROXLl09NmDBBrVq1SnXq1MlPpH799VfX5jdo0ECNGjXKIlLffPONECnXSEpDQcAMAnhArYLm6yE/mekhJrR+CytvBBaeWe4LW96CTVyZqD1TekxckbNGciJ5RCf3xxA2YmoYCBghUe3atVO33367Ipnq06ePeuKJJ9ShQ4esiNSiRYtcm1u/fn1/ugMSqQ4dOqhjx/gHQ38pUqSINdm8cuXK+pWLRkEgThHAg4pDeoxIfRKnLgZzaxxO1gEGnpuHBJtmw7abIRziS6TC1UhPwP+xieS0+Bo5BEiimC9Da9myZUs6fc8995y1ufDhw4dV69at1S+//JLuvJMPzBvlS3cwb948o0SqcOHC1tBelSpVnJgodYEAhnIliV2CfhPwwDoK11tCXk8QCM7Azxfg94MQM0uINQAJ27ilBCOF7m/AGuyIoArOgaoJv0dEsE/pKsEQIIniXAat5fPPP7fmMKVV2qtXLyvvE4nUAw88oH76yX3En3mjxowZo3LlyqXmz5+v2rdvr44e5X1bf/ERqcsuu0y/8jjUiD0VtX+v4hiuuHMND64zkOfh2IMQzxILDcDzxnMffO2rQZdxFbBzOzqpCWFSzHgu38O5q+Hvj/HspPgWfQSyI0kY2br28tprr6k33+SuAKnl2WeftTKRk0i1adNGLVy4MPWkw3e1a9f2E6nvvvvOKJEqVKiQFZGqWrWqQysTtzryewmJStzL7/ccDzFriAsHNvkPxs+bDXCFE8g/jiWXYO+/sJeZ20n84nHC+VD4xeuyDa9SBAGjCGTHF83Yw+7111+3Emam9eDpp59WPXr0UEeOHAmbSN11113q3XffVblz51bff/+9atu2rfr3X94f9JeCBQuqyZMnq8svv1y/8jjUiEiUEXIeh1DFvUu4x3CydQVID8jOOHCY98zOkErwzf0/wSgCAbsZKXwBJnDS5yQIhyRjvRyCA/fDr+6QeCSHsX594tJ+DucZfdj169dPDRs2LB14Tz31lHryySctwsOI1I8//pjuvJMPd9xxh59ILViwwDiRmjRpkuIQn5SsEUB088DWrVuPZF1DziQaAnioHYMMgd/lIH0gsbhSjBPGe0EuhS+jIDE/TAkf1kOY44v7l30JicWyD0b/F3IJfCEhlCIIRAwBRqKMkih60r9/fzVkCO+fqaVnz56KZIqRIxKpH374IfWkw3e1atVSY8eOVeecc45FyKjPVESKQ3vPPPOMQwsTqzq+U/ynLkUQyIQAvhsHIa/gRFnIIIiZyYyZeg7rwGG07gspC9v7Q+LuDwJ8Wg5pCB9vgsyDxELZASOfg3Aj4d4Qx3s/xoKTYqO3ETA2Jyqj22+88YYaNIj3zNTCYT0O73FSONMicEjObWFKBR+R4lwrEikOGZooTB5asmRJE6rjRadxYh4vQCWqH3jg7YY8Cf+5j9oYiPZVwhqw5QpTTuwsB1u5+o4Rj7gu8HEhhCkquNfdAogXh/m40XQ3yMWwtR8kFqOaMF9KPCDASNSaSDnyv//9T1HSlu7duytOOPcRKa62c1tq1qypxo0bZ0WkSKS4CpCT2HUXboosJCooqu6zqgZVKyfjDQHcfzZDOsGvIhA+vAdAlkOiUUgYfoO8BrkVUhS2dYFwRVtCFfg8B3ILnE6CtIV8CInmfLZN6H88pDWEpHYYxMwEWHQgRRCwi0A2VixVqtRavFSw2yjceoxAcSgvbRk+fLji/CkOyTGiRELktnC1HhNxkphdd911Vvb08847z626gO24uXI4kbOASuPn4K2YE+V+fDaKOGA+VzN0f3MUTYhW1y/ioaT/H4dLb3AdSqFpXUg9yJ2QghATZTeUzobMgnwFDBKOMNkFFdeEz4urILwudSA3QnJCTBRGs7/1Ca4LV0J6tgAbKzKm0cA34DMx8FSBn8Vg0PMajdoCPwdq1BdxVT4SxX9/T0ey927dumWaW8SUCFzRRyLFVXcconNbOMeKQ4QkUtdee61FpM4//3y36jK1Y9LP5cuj9Yc5kzleOrALBKoEDDrtJaPElthFADfuHLD+BghXkvG7VTzlle99UgjvrfsZXn2FkSWSJBIjzp/hq0/4eSVkEW7i8l0FEE4Lrkt+tKkJKQPxXRO+pn2f1U2XQ6O7UoQRLt97bpczD9eEf+ylCAKeR8BHojiZkOPfES1du3a1hvLSdsqNhpljimkLSKQ4adxtYUSK85fwY1fXXHONmjhxotJBpJiRnREuKQERGA8S1T7gGTkoCBhCAL/xXFDNf8l8gJM8kSTtxMNYlroDiGgVXJe86JtEtzDkOMQiS3JdgISUuEAgO73AQ4/pw/kPLaKFqQ84hJe2dO7cWVWsWFEdP37c2mR47ty5aU87el+jRg3VrBlHZ5Ti5sckVAcPhj9/dcaMGY7sSKTKuGn+XyL5K756AwE8lE9AtkKWQpZBkiFCoKJ8eXAN/oVshPwGWQnZBpHrEuXrIt3rQ8AiUVDHcPY0fWrta+JcqL59+/obMDXB3r1n9+/0Eak5c+b4zzt9c8899/ibLF68WLVq1SosInXgwAErQuZXKm/SInAMSTa/SntA3gsCgoAgIAgIAvGKAOcaWCV//vwkUvenfIzoy6JFi9SmTZvUyZMnVZ8+fdTatanD4Xgoq+nTpyvuXVeuHPP0OSt79uxRTJDpK9u2bbNyUjVq1Miae+U7bve1S5cuVlTLbv0EqzcL+I5PMJ/FXUFAEBAEBIEERcAXieKS/dnAYH20cJgyZYp69NFHA+6nd+LECdWxY0f11VfOgxzr1q3L5NLSpUsVV9cxquSkMH0CCZ2UwAggTJ8aUgxcRY4KAoKAICAICAJxg4CfRGGoi3MKnveqZyRSnTp1UrNmcSWy/fLll18GrOyESLHvl156SfXu3TugLjloITAVE+4XChaCgCAgCAgCgkCiIOAfzqPDmHS9CqvX6oNMXeBFADi0x0ndnHhevnz5kCZyUnrG7WbSNtq+fbtinapVqzJXVtpT/vdr1qyxUiXMnDnTf0zeZELgFK5Ns0OHDkUzGV8mo+SAICAICAKCgCBgEoGMeVVUUlJSDZCo+SY7DVd3zpw5FVMhNGjQIEtVnGNVv359/yT1LCumnOAEdOalypcvn8qbN6/iPC0SNpIoKSERGIcVng+GrCUVBAFBQBAQBASBOEIgE4mib4jKcJk6N6P0bCGRGjx4sGrSpEkmG0l+mBF9/35ufSXFMALHoL88SNQ/hvsR9YKAICAICAKCgKcQCEiiMMm8Svbs2ZfD0nTDfZ6yPMUYbg/TtGlThdWFasOGDdbEb+aEkhIZBJAXalBycvKTkelNehEEBAFBQBAQBLyDQEASRfMQjXoZL//xjqliiQcRWAKbbkEU6ogHbROTBAFBQBAQBAQBowhkGWnCJPP5iO5cjt4rG7VAlMcqAsxwXwsEinuTSREEBAFBQBAQBBIOAX+KgwCen0Hyy7Y4vjTAOTmU2Agch/tNZB5UYn8JxHtBQBAQBBIdgWAkSiEFwGEA1BgS8X31Ev3CeNz/R0GgfvS4jWKeICAICAKCgCBgFIGgJIo942G5CSkP7sVbrsKSkuAI4LswBN+JcQkOg7gvCAgCgoAgIAjYW32H+VGbkT/pD+DVCJLlPCrBM+4R+AgE6lF4eSbuPRUHBQFBQBAQBASBEAiEjET52uPhORnva0F2+I7Ja8IggEwGZ17Ad6AVPD6VMF6Lo4KAICAICAKCQBAEskxxkFUbpD64COeYjLN6VnXkeFwhcBDetAaBmhZXXokzgoAgIAgIAoJAmAjYjkT5+sHDlJmpb0ZkYorvmLzGLQJ/Yk+8G4RAxe31FccEAUFAEBAEwkDA1fwmzJE6gc1mp2CeFOfG1IA4jmiFYbM0jQwCc5C1vg4I1KbIdCe9CAKCgCAgCAgCsYVA2OSnRIkSVXPkyPE63L47tlwXa7NAYB1W4L24ZcsWRhplAnkWIMlhQUAQEAQEAUEgbBLlgzApKakGHr798fkG3zF5jSkEtmKI9mXsgzcWVp+MKcvFWEFAEBAEBAFBIAoIaCNRPttBppqCTPXF5wq+Y/LqaQT2wrr+GLobtnnz5n89bakYJwgIAoKAICAIeAgB7SQqxbecWMVXD++Z7bwhpHjKcXnxBgIkS3Mg/5c7d+4pGzdu3OcNs8QKQUAQEAQEAUEgdhAwRaLSIpAdhIpDfCRUlIppT8r7yCCAobptiBB+id7+D1GnORJ1igzu0osgIAgIAoJA/CIQCRKVDj0Qqop4oFfFAz0JUgrvk1CBr6V4DK8F0jUI8AH17E54jka9aPRJlLgtzzYI5zYlA6NkvG4FYUpGmoI/MdfpN5yzaxuqShEEBAFBQBAQBASBYAj8P8E/irqjyB7mAAAAAElFTkSuQmCC";

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
  if (!compact) {
    return (
      <span className="brand brand--wordmark">
        <img className="brand__wordmark" src={logitWordmark} alt="LOGIT" />
      </span>
    );
  }

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
  zoom = 0.78,
}: {
  image: string;
  alt: string;
  tone?: DeviceShotTone;
  className?: string;
  zoom?: number;
}) {
  return (
    <div className={`device-shot device-shot--${tone} ${className}`.trim()}>
      <div className="device-shot__glow" aria-hidden="true" />
      <DeviceFrameset
        device="iPhone X"
        zoom={zoom}
        className="device-shot__frame"
      >
        <div className="device-shot__screen">
          <img src={image} alt={alt} />
        </div>
      </DeviceFrameset>
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
                zoom={0.96}
              />
              <DeviceShot
                className="hero__device hero__device--secondary"
                image={screenshots.workoutRecorder}
                alt="LOGIT workout recorder screen on iPhone"
                tone="blue"
                zoom={0.76}
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
                    zoom={0.82}
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
                    zoom={0.68}
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
          <div className="pro-card reveal-up">
            <div className="pro-card__copy">
              <p className="section-heading__eyebrow">LOGIT Pro</p>
              <h2>Advanced tracking without changing the rhythm.</h2>
              <p className="pro-card__lead">
                Measurements, charts, and smart template capture extend the same
                logging flow instead of feeling like separate tools.
              </p>

              <div className="pro-card__panel">
                <span className="pro__kicker">Upgrade without changing pace</span>
                <ul className="pro-list">
                  {proFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="button button--primary pro-card__cta" href={appStoreUrl} target="_blank" rel="noreferrer">
                  <Download size={16} />
                  <span>View on the App Store</span>
                </a>
              </div>
            </div>

            <div className="pro-card__visual reveal-up" style={{ animationDelay: "100ms" }}>
              <DeviceShot
                image={screenshots.bodyFat}
                alt="LOGIT chart detail screen on iPhone"
                tone="teal"
                zoom={0.9}
              />
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
